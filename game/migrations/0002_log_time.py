# Generated by Django 3.2.5 on 2021-11-29 13:52

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('game', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='log',
            name='time',
            field=models.DateTimeField(default=datetime.datetime.now),
        ),
    ]