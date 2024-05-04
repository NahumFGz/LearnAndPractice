from django.contrib import admin

from .models import Task


class TaskAdmin(admin.ModelAdmin):
    list_display = ["title", "completed", "created_at", "updated_at"]
    list_filter = ["completed", "created_at", "updated_at"]
    search_fields = ["title", "description"]
    readonly_fields = ["created_at", "updated_at"]
    fields = ["title", "description", "completed", "created_at", "updated_at"]
    list_per_page = 10


admin.site.register(Task, TaskAdmin)
