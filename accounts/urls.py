from django.urls import path
from . import views

urlpatterns = [
    path('', views.Login, name='login'),
    path('logout', views.Logout, name="logout"),
    path('accounts/', views.AccountCreate.as_view(), name='accounts')
]