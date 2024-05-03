from django.contrib import admin

from .models import Task


# Register your models here.
class TaskAdmin(admin.ModelAdmin):
    list_display = ("title", "description", "done")
    search_fields = ("title", "description")


admin.site.register(Task, TaskAdmin)
