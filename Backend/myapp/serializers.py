from rest_framework import serializers
from .models import CustomUser, FoodItem

class CustomUserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'email', 'avatar', 'name', 'address', 'city', 
                  'state_province', 'zip_code', 'country', 'is_superuser',)  # Add more fields as needed

class AvatarUploadSerializer(serializers.ModelSerializer):
    avatar = serializers.ImageField(required=True)
    class Meta:
        model = CustomUser
        fields = ('avatar',)  # Only the avatar field is here

class FoodItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodItem
        fields = ('id', 'name', 'price', 'image_url')