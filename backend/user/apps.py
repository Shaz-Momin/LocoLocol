from django.apps import AppConfig


class StudentUserConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "studentuser"


class BusinessUserConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'businessuser'
