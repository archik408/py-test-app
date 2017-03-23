from django.core import serializers
from django.http import HttpResponse
from django.db.models import Q

from main_app import models

def list(request):
    """Get all user groups."""
    if request.method == 'GET':
        groups = models.Group.objects.all()
        return _reply(groups)
    else:
        return _reply(status=400)

def detail(request, name):
    """Get or create/update/patch specific user group"""
    if request.method == 'GET':
        try:
            grp = models.Group.objects.get(name=name)
            return _reply([grp])
        except:
            return _reply(status=404)
    elif request.method == 'POST' or request.method == 'PUT' or request.method == 'PATCH':
        for grp in serializers.deserialize("json", request.body):
            grp.save()
        return _reply()
    else:
        return _reply(status=400)

def search(request):
    """Find specific user group"""
    if request.method == 'GET':
        text = request.GET.get('text', '')
        groups = models.Group.objects.filter(Q(name=text) | Q(title=text))
        return _reply(groups)
    else:
        return _reply(status=400)

def _reply(data = [], status=200):
    return HttpResponse(serializers.serialize("json", data), content_type="application/json", status=status)