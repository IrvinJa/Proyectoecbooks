# Generated by Django 4.2.6 on 2023-10-14 21:26

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('usuarios', '0005_catalogosexo_usuario'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='catalogosexo',
            name='usuario',
        ),
        migrations.AddField(
            model_name='usuario',
            name='usuario',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='usuario_usuario', to=settings.AUTH_USER_MODEL),
        ),
    ]
