# Importing necessary modules
from rest_framework.views import APIView
from rest_framework import viewsets
from .serializers import CustomUserSerializer, FoodItemSerializer
from rest_framework import status
from rest_framework.response import Response
from django.contrib.auth.hashers import check_password, make_password
from .models import CustomUser, FoodItem
from decouple import config
from django.http import JsonResponse
import jwt
import datetime
from rest_framework.decorators import api_view

@api_view(['GET'])
def get_food_items(request):
    items = list(FoodItem.objects.values())
    return JsonResponse({'items': items})


# Fetching JWT Secret Key from environment
SECRET_KEY = config("JWT_SECRET_KEY")

# Define API view for user authentication
class Authenticate(APIView):

    def post(self, request):
        # Extract username and password from the request payload
        username = request.data.get("username")
        password = request.data.get("password")

        # Try fetching the user
        try:
            user = CustomUser.objects.get(username=username)
        except CustomUser.DoesNotExist:
            # Return 401 if user does not exist
            return Response({"error": "Invalid username or password"}, status=status.HTTP_401_UNAUTHORIZED)

        # Validate the password
        if check_password(password, user.password):
            # Create JWT payload and token
            payload = {
                "user_id": user.id,
                "exp": datetime.datetime.utcnow() + datetime.timedelta(days=1),
                "iat": datetime.datetime.utcnow(),
                "isAdmin": user.is_staff  # Or use any field that you have defined for admin status
            }
            token = jwt.encode(payload, SECRET_KEY, algorithm="HS256")

            return Response({"token": token}, status=status.HTTP_200_OK)
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
