from django.db import models

class Log(models.Model):
    """"掲示板"""
    username = models.CharField(max_length=256)
    roomname = models.CharField(max_length=256)
    comment = models.TextField(default='')
