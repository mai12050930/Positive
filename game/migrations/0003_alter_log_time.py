# Generated by Django 3.2.5 on 2021-12-15 06:05

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('game', '0002_log_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='log',
            name='time',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]