from django.contrib import admin
from .models import User


# For the admin interface

class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'password', 'email', 'description')


# Register your models here.

admin.site.register(User, UserAdmin)
