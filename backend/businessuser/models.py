from django.db import models


class BusinessUser(models.Model):
    username = models.CharField(max_length=120)
    password = models.CharField(max_length=120)
    email = models.TextField()
    description = models.TextField(max_length=500, blank=True)
    officeLoc = models.CharField(max_length=120)
    industry = models.CharField(max_length=120)
    founded = models.CharField(max_length=120)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    # services = models.TextField()

    def _str_(self):
        return self.username