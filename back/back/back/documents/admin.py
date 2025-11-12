from django.contrib import admin
from .models import Category, Document

class DocumentInline(admin.TabularInline):
    model = Document
    extra = 1

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ("name",)
    inlines = [DocumentInline]

@admin.register(Document)
class DocumentAdmin(admin.ModelAdmin):
    list_display = ("title", "category")
    search_fields = ("title",)
    list_filter = ("category",)
