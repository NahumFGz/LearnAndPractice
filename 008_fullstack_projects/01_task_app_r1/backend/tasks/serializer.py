from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        # !Puedo seleccionar campos en una tupla
        # fields = ('id', 'title', 'description')
        # !Puedo traer todos los campos
        fields = '__all__'