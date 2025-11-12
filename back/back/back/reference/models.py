from django.db import models


class Reference(models.Model):
    fio = models.CharField(max_length=255, verbose_name="ФИО")
    student_class = models.CharField(max_length=50, verbose_name="Класс")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата заказа")
    status = models.CharField(
        max_length=20,
        choices=[
            ("new", "Новая"),
            ("in_progress", "В обработке"),
            ("ready", "Готова"),
            ("issued", "Выдана"),
        ],
        default="new",
        verbose_name="Статус",
    )

    class Meta:
        verbose_name = "Заказ справки"
        verbose_name_plural = "Заказы справок"

    def __str__(self):
        return f"{self.fio} ({self.student_class}) — {self.get_status_display()}"
