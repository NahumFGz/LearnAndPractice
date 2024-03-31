from django.shortcuts import render
from .models import Category, Post

# Create your views here.
def blog(request):
    posts = Post.objects.all()
    return render(request, "blog/blog.html", {'posts': posts})