from django.conf.urls import url

from main_app.views import user

urlpatterns = [
    url(r'^$', user.list, name='user-list'),
    url(r'^/(\d+)$', user.detail, name='user-detail'),
    url(r'^/search$', user.search, name='user-search')
]