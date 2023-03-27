from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets
from .models import StudentUser
from .serializers import StudentUserSerializer


# Create your views here.
class UserView(viewsets.ModelViewSet):
    serializer_class = StudentUserSerializer
    queryset = StudentUser.objects.all()


@csrf_exempt
def hello_world(request):
    if request.method == 'POST':
        # data = request.POST.get('data', None)
        # do something with the data, e.g. save to the database
        return JsonResponse({'status': 'ok'})
    else:
        return JsonResponse({'status': 'error'})
