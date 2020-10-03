from django.contrib import admin
from django.urls import path,include
from . import views

urlpatterns = [
    path('', views.apiOverview,name='api-overview'),
    path('books/', views.books,name='books'),
    path('book/<str:pk>/', views.book,name='book'),
    path('create-book/', views.bookCreate,name='create-book'),
    path('update-book/<str:pk>/', views.bookUpdate,name='update-book'),
    path('delete-book/<str:pk>/', views.bookDelete,name='delete-book'),

]
