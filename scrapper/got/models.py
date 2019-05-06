from django.db import models


class Products(models.Model):
    name = models.CharField(max_length=200)
    price = models.CharField(max_length=10)
    img = models.CharField(max_length=500)
