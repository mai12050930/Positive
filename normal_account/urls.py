from django.urls import path
from . import views
 
urlpatterns = [
    path(r"", views.account, name='account'),
    path(r"top/", views.top, name='top'),
]