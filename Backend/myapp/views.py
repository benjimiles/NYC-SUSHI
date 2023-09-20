# Importing necessary modules
from rest_framework.views import APIView
from rest_framework import viewsets, status
from .serializers import CustomUserSerializer, FoodItemSerializer, AvatarUploadSerializer
from rest_framework.response import Response
from django.contrib.auth.hashers import check_password, make_password
from .models import CustomUser, FoodItem
from decouple import config
from django.http import JsonResponse
from rest_framework.decorators import api_view,action,permission_classes, action
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from django.http import QueryDict
@api_view(['GET'])
def get_food_items(request):
    items = list(FoodItem.objects.values())
    return JsonResponse({'items': items})

class CustomUserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    

    @action(detail=True, methods=['POST'])
    def update_user(self, request, pk=None):
        user = self.get_object()

        mutable_data = request.data.copy()  # Make a mutable copy

        if 'avatar' in mutable_data and isinstance(mutable_data['avatar'], str):
            del mutable_data['avatar']  # Delete the avatar key if it exists and is a string

        serializer = CustomUserSerializer(user, data=mutable_data, partial=True)  # Use the mutable copy

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



    @action(detail=True, methods=['POST'])
    def upload_avatar(self, request, pk=None):
        user = self.get_object()
        file_serializer = AvatarUploadSerializer(user, data=request.data)

        if file_serializer.is_valid():
            file_serializer.save()
            return Response(file_serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)



# Fetching JWT Secret Key from environment
SECRET_KEY = config("JWT_SECRET_KEY")

# Define API view for user authentication
class Authenticate(APIView):

    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")
        
        try:
            user = CustomUser.objects.get(username=username)
        except CustomUser.DoesNotExist:
            return Response({"error": "Invalid username or password"}, status=status.HTTP_401_UNAUTHORIZED)

        # ... in your Authenticate class
        if check_password(password, user.password):
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            })

        else:
            return Response({"error": "Invalid username or password"}, status=status.HTTP_401_UNAUTHORIZED)

# Define API view for user signup
class Signup(APIView):

    def post(self, request):
        # Extract data from the request payload
        data = request.data
        username = data.get("username")
        password = data.get("password")
        email = data.get("email")

        # Validate input
        if not username or not password or not email:
            return Response({"error": "Missing username, password, or email"}, status=status.HTTP_400_BAD_REQUEST)

        # Check for existing username or email
        if CustomUser.objects.filter(username=username).exists():
            return Response({"error": "Username already exists"}, status=status.HTTP_400_BAD_REQUEST)
        elif CustomUser.objects.filter(email=email).exists():
            return Response({"error": "Email already exists"}, status=status.HTTP_400_BAD_REQUEST)
        else:
            # Create a new user
            hashed_password = make_password(password)
            user = CustomUser.objects.create(username=username, password=hashed_password, email=email)
            user.save()

            return Response({"message": "User created successfully"}, status=status.HTTP_201_CREATED)



class FoodItemAPI(APIView):


    def post(self, request):
        data = request.data.copy()
        if not data.get('image_url'):
            data['image_url'] = 'https://norecipes.com/wp-content/uploads/2012/07/california-roll-012.jpg'
        serializer = FoodItemSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    def get(self, request, pk=None):
        if pk:
            try:
                item = FoodItem.objects.get(pk=pk)
                serializer = FoodItemSerializer(item)
                return Response(serializer.data)
            except FoodItem.DoesNotExist:
                return Response(status=status.HTTP_404_NOT_FOUND)
        else:
            items = FoodItem.objects.all()
            serializer = FoodItemSerializer(items, many=True)
            return Response({'items': serializer.data})

    def put(self, request, pk=None):
        if pk:
            try:
                item = FoodItem.objects.get(pk=pk)
                data = request.data.copy()
                if not data.get('image_url'):
                    data['image_url'] = 'https://norecipes.com/wp-content/uploads/2012/07/california-roll-012.jpg'
                serializer = FoodItemSerializer(item, data=data)
                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            except FoodItem.DoesNotExist:
                return Response(status=status.HTTP_404_NOT_FOUND)


    def delete(self, request, pk=None):
        if pk:
            try:
                item = FoodItem.objects.get(pk=pk)
                item.delete()
                return Response(status=status.HTTP_204_NO_CONTENT)
            except FoodItem.DoesNotExist:
                return Response(status=status.HTTP_404_NOT_FOUND)
