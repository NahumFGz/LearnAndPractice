from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home(request):
    return HttpResponse("Hello, Django!")

def about(request):
    return HttpResponse("About us")

def services(request):
    return HttpResponse("Services")

def store(request):
    return HttpResponse("Store")

def contact(request):
    return HttpResponse("Contact us")

def blog(request):
    return HttpResponse("Blog")

def sample(request):
    return HttpResponse("Sample")
