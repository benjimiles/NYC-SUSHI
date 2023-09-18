from rest_framework import serializers
from .models import CustomUser, FoodItem

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'email','avatar', 'name')  # Add more fields as needed
class FoodItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodItem
        fields = ('id', 'name', 'price', 'image_url')
class AvatarUploadSerializer(serializers.ModelSerializer):
    avatar = serializers.ImageField(required=False)
    name = serializers.CharField(required=False)
    class Meta:
        model = CustomUser
        fields = ('avatar','name')