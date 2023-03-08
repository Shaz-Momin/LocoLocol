from rest_framework import serializers
from .models import User
from .models import BusUser


# This code specifies the model to work with and the fields to be converted to JSON.

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password', 'email', 'description', 'university', 'study', 'classification',
                  'graduatedate')


class BusUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = BusUser
        fields = ('username', 'password', 'email', 'description', 'officeLoc', 'industry', 'founded')