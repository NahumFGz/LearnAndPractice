from rest_framework import serializers

from .models import Task


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        # !Puedo seleccionar algunos campos en una tupla o traer todos loca campos
        # fields = ("id", "title", "description")
        fields = "__all__"
