from rest_framework import serializers

from .models import Task


# Definir el TaskSerializer principal
class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = "__all__"


# Definir el ListSerializer utilizando TaskSerializer definido anteriormente
class TaskBulkCreateSerializer(serializers.ListSerializer):
    child = TaskSerializer()

    def create(self, validated_data):
        tasks = [Task(**item) for item in validated_data]
        return Task.objects.bulk_create(tasks)


# Re-define TaskSerializer para especificar el list_serializer_class
class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = "__all__"
        list_serializer_class = TaskBulkCreateSerializer
