from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import Category, Document
from .serializers import CategorySerializer, DocumentSerializer

class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class DocumentViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer
