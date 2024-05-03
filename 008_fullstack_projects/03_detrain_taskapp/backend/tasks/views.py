from rest_framework import viewsets

from .models import Task
from .serializer import TaskSerializer


# Create your views here.
class TaskViewSet(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
