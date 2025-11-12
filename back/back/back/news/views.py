from rest_framework import viewsets
from rest_framework.pagination import PageNumberPagination
from .models import News
from .serializers import NewsSerializer

class StandardPagination(PageNumberPagination):
    page_size = 5  # по умолчанию 5 на страницу
    page_size_query_param = 'page_size'  # параметр для изменения размера страницы
    max_page_size = 100  # максимальное количество на страницу

class NewsViewSet(viewsets.ModelViewSet):
    queryset = News.objects.all().order_by('-created_at')
    serializer_class = NewsSerializer
    pagination_class = StandardPagination  # 🔥 добавляем пагинацию
