from rest_framework import serializers
from .models import User


# This code specifies the model to work with and the fields to be converted to JSON.

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password', 'email', 'description')
