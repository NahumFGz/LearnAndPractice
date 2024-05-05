from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Task
from .serializer import TaskBulkCreateSerializer, TaskSerializer


# Create your views here.
class TaskViewSet(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()

    @action(detail=False, methods=["post"], url_path="bulk-create")
    def bulk_create(self, request, *args, **kwargs):
        serializer = TaskBulkCreateSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=["delete"], url_path="delete-all")
    def delete_all(self, request, *args, **kwargs):
        # Eliminar todas las tareas
        count = Task.objects.all().delete()
        return Response(
            {"message": f"Successfully deleted {count[0]} tasks."},
            status=status.HTTP_204_NO_CONTENT,
        )
