from django.urls import path
from . import views

urlpatterns = [
    path('', views.choice, name='choice'),
    path('home/', views.home, name='home'),
    path('home/match/', views.match, name='match'),
    path('home/match/create_log/', views.create_log, name="create_log"),
    path('home/match/cleate_log/clear/', views.clear, name='clear')
]