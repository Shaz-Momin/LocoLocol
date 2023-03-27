from rest_framework import serializers
from .models import StudentUser


class StudentUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentUser
        fields = ('username', 'password', 'email', 'description', 'university', 'study', 'classification',
                  'graduatedate')



#old
#class TodoSerializer(serializers.ModelSerializer):
#    class Meta:
#        fields = ('id', 'title', 'description', 'completed')