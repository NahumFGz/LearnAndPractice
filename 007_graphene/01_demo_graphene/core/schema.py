import graphene
from graphene_django.types import DjangoObjectType

from books.models import Book


class BookType(DjangoObjectType):
    class Meta:
        model = Book
        fields = ("id", "title", "description")


class Query(graphene.ObjectType):
    hello = graphene.String(default_value="Hi!")
    books = graphene.List(BookType)

    def resolve_books(self, info):
        return Book.objects.all()


schema = graphene.Schema(query=Query)
