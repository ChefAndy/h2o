# Generated by Django 2.2.13 on 2020-08-10 13:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0060_auto_20200809_2151'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='casebook',
            name='edition_name',
        ),
        migrations.RemoveField(
            model_name='casebook',
            name='edition_slug',
        ),
        migrations.RemoveField(
            model_name='historicalcasebook',
            name='edition_name',
        ),
        migrations.RemoveField(
            model_name='historicalcasebook',
            name='edition_slug',
        ),
    ]
