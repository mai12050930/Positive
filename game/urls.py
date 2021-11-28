from django.urls import path
from . import views

urlpatterns = [
    path('', views.choice, name='choice'),
    path('home/', views.home, name='home'),
    path('home/clear', views.clear, name='clear')
]