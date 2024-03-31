from django.urls import path
from . import views

urlpatterns = [
    # Paths del contact
    path('', views.contact, name="contact"),
]
