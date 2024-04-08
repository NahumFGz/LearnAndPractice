from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        # ! Puedo seleccionar algunos campos
        # fields = ('id', 'title', 'description', 'done')
        # ! O traer todos los campos
        fields = '__all__'