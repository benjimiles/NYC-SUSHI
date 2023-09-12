"""
URL configuration for myproject project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from myapp import views
from rest_framework.decorators import api_view
from myapp.views import Authenticate, Signup, CustomUserViewSet, get_food_items
from django.contrib import admin

router = DefaultRouter()
router.register(r"users", views.CustomUserViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path("authenticate/", Authenticate.as_view(), name="authenticate"),
    path("signup/", Signup.as_view(), name="signup"),
    path("food-items/", get_food_items, name="food-items"),
    path("admin/", admin.site.urls),
]
