from django.contrib import admin
from .models import Reference


@admin.register(Reference)
class ReferenceAdmin(admin.ModelAdmin):
    list_display = ("fio", "student_class", "status", "created_at")
    list_filter = ("status", "student_class", "created_at")
    search_fields = ("fio", "student_class")
    ordering = ("-created_at",)
