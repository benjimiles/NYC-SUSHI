# Importing necessary modules
from rest_framework.views import APIView
from rest_framework import viewsets, status
from .serializers import CustomUserSerializer, FoodItemSerializer, AvatarUploadSerializer
from rest_framework import status
from rest_framework.response import Response
from django.contrib.auth.hashers import check_password, make_password
from .models import CustomUser, FoodItem
from decouple import config
from django.http import JsonResponse
import jwt
import datetime
from rest_framework.decorators import api_view,action,permission_classes
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
@api_view(['GET'])
def get_food_items(request):
    items = list(FoodItem.objects.values())
    return JsonResponse({'items': items})

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def upload_avatar(request):
    if request.method == 'POST':
        user = request.user
        updated_data = request.data.copy()
        
        # If a new name is provided, update it
        if 'name' in updated_data:
            updated_data['name'] = updated_data['name']
        else:
            updated_data['name'] = user.name  # Default to the current name

        # If an avatar is provided, it will be included in updated_data by default

        # Initialize the serializer with the current user instance
        file_serializer = AvatarUploadSerializer(user, data=updated_data)
        
        # Validate and save the serializer
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
            print(f"Refresh Token: {str(refresh)}")  # Debug line
            print(f"Access Token: {str(refresh.access_token)}")  # Debug line
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

# Define API viewset for CustomUser model

class CustomUserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    @action(detail=False, methods=['GET'])
    def me(self, request):
        user = request.user
        if user.is_authenticated:
            serializer = CustomUserSerializer(user)
            return Response(serializer.data)
        else:
            return Response({"detail": "Not authenticated"}, status=status.HTTP_401_UNAUTHORIZED)

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
