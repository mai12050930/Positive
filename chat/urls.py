from django.urls import path
from . import views

 
urlpatterns = [
    path(r"chat/", views.chat, name='chat'),
]