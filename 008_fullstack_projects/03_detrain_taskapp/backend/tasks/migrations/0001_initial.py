# Generated by Django 4.2.11 on 2024-05-03 20:21

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200, verbose_name='titulo')),
                ('description', models.TextField(blank=True, verbose_name='descripción')),
                ('done', models.BooleanField(default=False, verbose_name='¿está hecha?')),
            ],
            options={
                'verbose_name': 'Tarea',
                'verbose_name_plural': 'Tareas',
                'ordering': ['title'],
            },
        ),
    ]
