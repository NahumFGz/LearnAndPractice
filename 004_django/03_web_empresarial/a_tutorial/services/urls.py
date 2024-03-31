from django.urls import path
from . import views

urlpatterns = [
    # Paths del services
    path('', views.services, name="services"),
]
