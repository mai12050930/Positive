from django.urls import path
from . import views

urlpatterns = [
    path('', views.display_choice, name='choice'),
    path('home/', views.display_home, name='home'),
    path('home/match', views.display_match, name='match'),
    path('home/match/clear', views.display_clear, name='clear')
]