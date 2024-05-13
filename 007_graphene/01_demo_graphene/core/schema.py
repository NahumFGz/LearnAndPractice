import graphene
from graphene_django.types import DjangoObjectType

from books.models import Book


class BookType(DjangoObjectType):
    class Meta:
        model = Book
        fields = ("id", "title", "description", "created_at", "updated_at")


class Query(graphene.ObjectType):
    hello = graphene.String(default_value="Hi!")
    book = graphene.Field(BookType, id=graphene.ID())
    books = graphene.List(BookType)

    def resolve_books(self, info):
        return Book.objects.all()

    def resolve_book(self, info, id):
        return Book.objects.get(pk=id)


schema = graphene.Schema(query=Query)
