from django.urls import path
from . import views

urlpatterns = [
path("", views.home, name="home"),
path("register", views.register, name="register"),
path("download/<str:file_id>", views.download, name="download"),
path("login", views.sign_in, name="login"),
path("about", views.about, name="about"),

]