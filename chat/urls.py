from django.urls import path
from . import views

urlpatterns = [
    path('', views.chat, name='chat'),
    path('match/', views.match, name='match'),
]