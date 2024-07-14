from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=200)
    published_date = models.DateField()
    isbn = models.CharField(max_length=13)
    genre = models.CharField(max_length=50)

    def __str__(self):
        return self.title