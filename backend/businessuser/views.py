from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets
from .models import BusinessUser
from .serializers import BusinessUserSerializer


class BusinessUserView(viewsets.ModelViewSet):
    serializer_class = BusinessUserSerializer

    # A queryset is a database query that returns a list of model instances. It is an
    # object that represents a set of records from a database table or view
    queryset = BusinessUser.objects.all()


@csrf_exempt
def hello_world(request):
    if request.method == 'POST':
        # data = request.POST.get('data', None)
        # do something with the data, e.g. save to the database
        return JsonResponse({'status': 'ok'})
    else:
        return JsonResponse({'status': 'error'})
