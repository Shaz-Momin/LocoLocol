from rest_framework import serializers
from .models import BusinessUser


class BusinessUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = BusinessUser
        fields = ('username', 'password', 'email', 'description', 'officeLoc', 'industry', 'founded')

# old
# class TodoSerializer(serializers.ModelSerializer):
#    class Meta:
#        model = Todo
#        fields = ('id', 'title', 'description', 'completed')
