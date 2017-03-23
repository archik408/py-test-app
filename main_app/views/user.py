from django.core import serializers
from django.http import HttpResponse
from django.db.models import Q

from main_app import models

def list(request):
    """Get all users."""
    if request.method == 'GET':
        users = models.User.objects.all()
        return _reply(users)
    else:
        return _reply(status=400)

def detail(request, username):
    """Get or create/update/patch user groups"""
    if request.method == 'GET':
        try:
            usr = models.User.objects.get(username=username)
            return _reply([usr])
        except:
            return _reply(status=404)
    elif request.method == 'POST' or request.method == 'PUT' or request.method == 'PATCH':
        for usr in serializers.deserialize("json", request.body):
            usr.save()
        return _reply()
    else:
        return _reply(status=400)

def search(request):
    """Find specific user group"""
    if request.method == 'GET':
        text = request.GET.get('text', '')
        users = models.User.objects.filter(Q(username=text) | Q(firstName=text) | Q(lastName=text) | Q(email=text))
        return _reply(users)
    else:
        return _reply(status=400)

def _reply(data = [], status=200):
    return HttpResponse(serializers.serialize("json", data), content_type="application/json", status=status)