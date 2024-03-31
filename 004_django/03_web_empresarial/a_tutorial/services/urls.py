from django.urls import path
from . import views

urlpatterns = [
    # Paths del services
    path('services/', views.services, name="services"),
]
