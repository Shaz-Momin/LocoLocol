import json

from django.http import JsonResponse, HttpResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie
from rest_framework import viewsets
from rest_framework.response import Response

from .serializer import UserSerializer
from .models import User


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


@csrf_exempt
def hello_world(request):
    if request.method == 'POST':
        # Process the data here...
        info = request.body.decode()

        # convert string to dict
        json_object = json.loads(info)

        email = json_object['email']
        password = json_object['password']

        # check if user exists
        mydata = User.objects.filter(email=email, password=password).values()

        if mydata:
            return JsonResponse({'response': 'YES'})
        else:
            return JsonResponse({'response': 'NO'})
