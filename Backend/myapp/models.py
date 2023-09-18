from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
import os
from django.conf import settings

# Utility function to set upload directory
def user_directory_path(instance, filename):
    return f'user_{instance.id}/avatar.png'

# Custom manager for CustomUser model
class CustomUserManager(BaseUserManager):
    def create_user(self, username, password=None, **extra_fields):
        if not username:
            raise ValueError('The Username field must be set')
        user = self.model(username=username, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, password=None, **extra_fields):
        user = self.create_user(username, password, **extra_fields)
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user

# CustomUser model
class CustomUser(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=50, unique=True)
    name = models.CharField(max_length=50, default='username')
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    avatar = models.ImageField(upload_to=user_directory_path, null=True, blank=True)
    objects = CustomUserManager()
    email = models.EmailField(unique=True, null=True, blank=True)
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []
    def save(self, *args, **kwargs):
        # Delete old avatar file
        try:
            this = CustomUser.objects.get(id=self.id)
            if this.avatar != self.avatar:
                this.avatar.delete(save=False)
        except:
            pass  # Object is new, so the avatar doesn't exist yet.
        
        super(CustomUser, self).save(*args, **kwargs)

    def __str__(self):
        return self.username

class FoodItem(models.Model):
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    image_url = models.URLField(default="https://norecipes.com/wp-content/uploads/2012/07/california-roll-012.jpg", blank=True, null=True)

    def __str__(self):
        return self.name