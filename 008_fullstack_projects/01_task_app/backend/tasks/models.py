from django.db import models

# Create your models here.
class Task(models.Model):
    title = models.CharField(max_length=200, verbose_name='titulo')
    description = models.TextField(blank=True)
    done = models.BooleanField(default=False)

    class Meta:
        verbose_name = 'Tarea'
        verbose_name_plural = 'Tareas'
        ordering = ['title']

    def __str__(self) -> str:
        return self.title