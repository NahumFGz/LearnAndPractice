import graphene
from graphene_django.types import DjangoObjectType

from books.models import Book


class BookType(DjangoObjectType):
    class Meta:
        model = Book
        fields = ("id", "title", "description", "created_at", "updated_at")


class CreateBookMutation(graphene.Mutation):
    book = graphene.Field(BookType)

    class Arguments:
        title = graphene.String()
        description = graphene.String()

    def mutate(self, info, title, description):
        book = Book(title=title, description=description)
        book.save()
        return CreateBookMutation(book=book)


class DeleteBookMutation(graphene.Mutation):
    book = graphene.Field(BookType)

    class Arguments:
        id = graphene.ID(required=True)

    message = graphene.String()

    def mutate(self, info, id):
        book = Book.objects.get(pk=id)
        book.delete()
        return DeleteBookMutation(message="Book deleted successfully.")


class UpdateBookMutation(graphene.Mutation):
    book = graphene.Field(BookType)

    class Arguments:
        id = graphene.ID(required=True)
        title = graphene.String()
        description = graphene.String()

    def mutate(self, info, id, title, description):
        book = Book.objects.get(pk=id)
        book.title = title
        book.description = description
        book.save()
        return UpdateBookMutation(book=book)


class Query(graphene.ObjectType):
    hello = graphene.String(default_value="Hi!")
    book = graphene.Field(BookType, id=graphene.ID())
    books = graphene.List(BookType)

    def resolve_books(self, info):
        return Book.objects.all()

    def resolve_book(self, info, id):
        try:
            return Book.objects.get(pk=id)
        except Book.DoesNotExist:
            return None


class Mutation(graphene.ObjectType):
    create_book = CreateBookMutation.Field()
    delete_book = DeleteBookMutation.Field()
    update_book = UpdateBookMutation.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
