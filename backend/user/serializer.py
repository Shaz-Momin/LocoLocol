from rest_framework import serializers
from .models import BusinessUser, StudentUser


class BusinessUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = BusinessUser
        fields = ('username', 'password', 'email', 'description', 'officeLoc', 'industry', 'founded')


class StudentUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentUser
        fields = ('username', 'password', 'email', 'description', 'university', 'study', 'classification',
                  'graduatedate')


