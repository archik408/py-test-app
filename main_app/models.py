from __future__ import unicode_literals

from django.db import models

class Group(models.Model):
    """A model of a user group."""
    name = models.CharField("Group's name", max_length=20, unique=True, primary_key=True)
    title = models.CharField("Group's title", max_length=20)


class User(models.Model):
    """A model of a user."""
    username = models.CharField("User's username", max_length=20, unique=True, primary_key=True)
    firstName = models.CharField("User's first name", max_length=20)
    lastName = models.CharField("User's last name", max_length=20)
    email = models.EmailField("User's email", max_length=30, unique=True)
    group = models.ForeignKey("Group")