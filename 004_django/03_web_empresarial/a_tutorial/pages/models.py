from django.db import models
from ckeditor.fields import RichTextField

# Create your models here.
class Page(models.Model):
    title = models.CharField(max_length=200, verbose_name="titulo")
    content = RichTextField(verbose_name="contenido")
    order = models.SmallIntegerField(default=0, verbose_name="orden")
    created = models.DateTimeField(auto_now_add=True, verbose_name="fecha de creacion")
    updated = models.DateTimeField(auto_now=True, verbose_name="fecha de edicion")

    class Meta:
        verbose_name = "pagina"
        verbose_name_plural = "paginas"
        ordering = ['order','title']

    def __str__(self):
        return self.title