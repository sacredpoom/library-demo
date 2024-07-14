# Use to populate the database with test data 
import os
import django
import random

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

from api.models import Book

def populate_books():
    Book.objects.all().delete() #clear existing data

    titles = [f'Book Title {i}' for i in range(1, 101)]
    authors = [f'Author {i}' for i in range(1, 101)]
    genres = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Fantasy', 'Mystery', 'Romance']

    for i in range(100):
        book = Book(
            title=random.choice(titles),
            author=random.choice(authors),
            genre=random.choice(genres),
            published_date=f'2020-01-{random.randint(1,28)}',
            isbn=f'{random.randint(1000000000, 9999999999)}',
        )
        book.save()

    print('Successfully populated the database with 100 books')

if __name__ == '__main__':
    populate_books()