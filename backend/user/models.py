from django.db import models


# Create your models here.

class User(models.Model):
    username = models.CharField(max_length=120)
    password = models.CharField(max_length=120)
    email = models.TextField()
    description = models.TextField(max_length=500, blank=True)
    university = models.CharField(max_length=120)
    study = models.CharField(max_length=120)
    classification = models.CharField(max_length=120)
    graduatedate = models.CharField(max_length=120)

    # skills = models.TextField()
    def _str_(self):
        return self.username


class BusUser(models.Model):
    username = models.CharField(max_length=120)
    password = models.CharField(max_length=120)
    email = models.TextField()
    description = models.TextField(max_length=500, blank=True)
    officeLoc = models.CharField(max_length=120)
    industry = models.CharField(max_length=120)
    founded = models.CharField(max_length=120)

    # services = models.TextField()

    def _str_(self):
        return self.username
