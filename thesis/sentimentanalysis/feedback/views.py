from django.shortcuts import render, get_object_or_404, reverse
from django.http import HttpResponse, HttpResponseRedirect, Http404
# from .models import User, Comment
from django.core.paginator import Paginator
from django.db.models import Q
from django.db import IntegrityError
from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required, permission_required

def index(request):
    return render(request, 'getstart/getstart.html',)

def login(request):
    return render(request, 'login/login.html')


def process(request):
    username = request.POST.get('username')
    password = request.POST.get('password')

    user = authenticate(username = username, password = password)
    if user is not None:
        # login(request, user)
        if user.is_staff:
            return HttpResponseRedirect('/adminhome')
        else:
            return HttpResponse("<h1>HOHO</h1>")
    else:
        return render(request, 'login/login.html',{
            'error_message': "Login Failed"
        })
    
def adminhome(request):
    return render(request, 'admin/adminhome.html')