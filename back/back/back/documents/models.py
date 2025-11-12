from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=200, unique=True, verbose_name="Категория")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Категория"
        verbose_name_plural = "Категории"


class Document(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="documents", verbose_name="Категория")
    title = models.CharField(max_length=255, verbose_name="Название документа")
    file = models.FileField(upload_to="documents/", verbose_name="PDF файл")

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Документ"
        verbose_name_plural = "Документы"
