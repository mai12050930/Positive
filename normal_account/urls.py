from django.urls import path
from . import views

urlpatterns = [
    path('', views.display_top, name='top'),
    path('signup/', views.display_account, name='signup')
]