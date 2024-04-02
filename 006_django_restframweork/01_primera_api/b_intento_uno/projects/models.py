from django.db import models

# Create your models here.
class Project(models.Model):
    title = models.CharField(max_length=200, verbose_name="Titutlo")
    description = models.TextField(verbose_name="Descripción")
    technology = models.CharField(max_length=200, verbose_name="Tecnología")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Creado el")
