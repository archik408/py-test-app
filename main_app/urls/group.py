from django.conf.urls import url

from main_app.views import group

urlpatterns = [
    url(r'^$', group.list, name='user-list'),
    url(r'^/(\d+)$', group.detail, name='user-detail'),
    url(r'^/search$', group.search, name='user-search')
]