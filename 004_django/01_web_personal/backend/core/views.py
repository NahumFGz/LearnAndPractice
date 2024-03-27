from django.shortcuts import render, HttpResponse

# Create your views here.
def home(request):
    return HttpResponse('<h1>Mi web persoddsnal</h1><h2>Hola</h2>')
