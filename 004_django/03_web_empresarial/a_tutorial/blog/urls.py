from django.urls import path
from . import views

urlpatterns = [
    # Paths del core
    path('', views.blog, name="blog"),
]
