from django.urls import path
from . import views
from .views import PageListView, PageDetailView

urlpatterns = [
    path('', PageListView.as_view(), name="pages"),
    path('<int:pk>/<slug:page_slug>/', PageDetailView.as_view(), name="page"),
]
