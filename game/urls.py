from django.urls import path
from . import views
 
urlpatterns = [
    path(r"top/choice/", views.choice, name='choice'),
    path(r"home/clear/", views.clear, name='clear'),
    path(r"home/", views.home, name='home'),
    path(r"home/match/", views.match, name='match'),
]