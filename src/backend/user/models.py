from django.db import models


# Create your models here.

class StudentUser(models.Model):
    username = models.CharField(max_length=120)
    password = models.CharField(max_length=120)
    email = models.CharField(max_length=120)
    description = models.CharField(max_length=120)
    university = models.CharField(max_length=120)
    study = models.CharField(max_length=120)
    classification = models.CharField(max_length=120)
    graduatedate = models.CharField(max_length=120)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def _str_(self):
        return self.username


class BusinessUser(models.Model):
    username = models.CharField(max_length=120)
    password = models.CharField(max_length=120)
    email = models.CharField(max_length=120)
    description = models.TextField(max_length=500, blank=True)
    officeLoc = models.CharField(max_length=120)
    industry = models.CharField(max_length=120)
    founded = models.CharField(max_length=120)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def _str_(self):
        return self.username
