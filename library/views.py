from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import BookSerializer

from .models import Book
# Create your views here.

@api_view(['GET'])
def apiOverview(request):
    api_urls={
        'Books':'/books/',
        'Detail View':'/book/<str:pk>/',
        'Create':'/create-book/',
        'Update':'/update-book/<str:pk>/',
        'Delete':'/delete-book/<str:pk>/',
    }

    return Response(api_urls)

@api_view(['GET'])
def books(request):

    books=Book.objects.all()
    serializer=BookSerializer(books,many=True)

    return Response(serializer.data)



@api_view(['GET'])
def book(request,pk):

    book=Book.objects.get(id=pk)
    serializer=BookSerializer(book,many=False)

    return Response(serializer.data)


@api_view(['POST'])
def bookCreate(request):

    serializer=BookSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()


    return Response(serializer.data)


@api_view(['POST'])
def bookUpdate(request,pk):

    book=Book.objects.get(id=pk)

    serializer=BookSerializer(instance=book,data=request.data)

    if serializer.is_valid():
        serializer.save()
        
    return Response(serializer.data)


@api_view(['DELETE'])
def bookDelete(request,pk):

    book=Book.objects.get(id=pk)

    book.delete()
      
    return Response("Book is succesfully deleted!")