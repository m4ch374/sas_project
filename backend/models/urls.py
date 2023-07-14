from django.urls import path

from . import views

urlpatterns = [
    # placeholder examples
    path("", views.hello, name="hello"),
    path("accurate", views.accurate_model, name="accurate_model"),
]
