from django.contrib.auth import authenticate, login
from django.shortcuts import render
from rest_framework import viewsets, request
from rest_framework.decorators import action
from rest_framework.response import Response
from .serializer import UserSerializer
from .models import User
from django.http import JsonResponse


# Create your views here.

# Views are Python functions or classes that receive HTTP requests from a client and return HTTP
# responses.
#
# Views are responsible for handling the logic of your application, which could include
# querying the database, rendering templates, or performing other processing tasks.

# This code specifies the serializer_class and the queryset.


# a ViewSet is a class that defines the CRUD (Create, Retrieve, Update, and Delete) operations for
# a specific model or set of models. It is used to group related views into a single class, and provides
# a simple way to define multiple views for a single URL pattern.

# ModelViewSet: A ViewSet that provides default implementations for the CRUD operations for a model.
class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer

    # A queryset is a database query that returns a list of model instances. It is an
    # object that represents a set of records from a database table or view
    queryset = User.objects.all()
    @action(detail=False, methods=['POST'])
    def login(self, request):
        # Handle login logic
        username = request.data.get('username')
        password = request.data.get('password')

        user = authenticate(username=username, password=password)

        if user is not None:
            login(request, user)
            # If login is successful, create a JSON response
            response = {
                'status': 'success',
                'message': 'Login successful'
            }
            return JsonResponse(response)
        else:
            response = {
                'status': 'error',
                'message': 'Invalid request method'
            }
            return JsonResponse(response, status=405)

#def login_view(request):
#    if request.method == 'POST':
        # Handle login request
        # Retrieve username and password from POST data
#        username = request.POST.get('username')
 #       password = request.POST.get('password')