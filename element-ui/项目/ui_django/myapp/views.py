from django.shortcuts import render,redirect,reverse,HttpResponse
import json

# Create your views here.

def login(request):
    mes={'code':200} if request.method == 'POST' else {'code':0}
    return HttpResponse(json.dumps(mes,ensure_ascii=False))