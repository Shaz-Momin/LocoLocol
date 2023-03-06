from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.http import JsonResponse
from rest_framework import viewsets
from .serializer import UserSerializer
from .models import User
import json



class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

def hello_world(request):
    return JsonResponse({'message': 'Hello World'})


def login_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data['username']
        password = data['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({'auth': True})
        else:
            return JsonResponse({'auth': False})
    else:
        return JsonResponse({'error': 'Invalid request method'})


def signup_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data['username']
        password = data['password']
        if User.objects.filter(username=username).exists():
            return JsonResponse({'status': 'username_exists'})
        else:
            user = User.objects.create_user(username, None, password)
            user.save()
            login(request, user)
            return JsonResponse({'status': 'added'})
    else:
        return JsonResponse({'error': 'Invalid request method'})
