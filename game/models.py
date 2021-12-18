from django.db import models
from django.utils import timezone

class Log(models.Model):
    """"掲示板"""
    username = models.CharField(max_length=256)
    roomname = models.CharField(max_length=256)
    comment = models.TextField(default='')
    time = models.DateTimeField(default=timezone.now)