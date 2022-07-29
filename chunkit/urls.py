from django.urls import path
from . import views

urlpatterns = [
path("", views.home, name="home"),
path("register", views.register, name="register"),
path("download/<str:file_id>", views.download, name="download"),
path("login", views.sign_in, name="login"),
path("faq", views.faq, name="faq"),
path("send", views.send, name="send"),

# ******************* ADMIN PAGE VIEW *****************************

path("admin_home", views.admin_home, name="admin_home"),
path("message", views.message, name="message"),
path("user", views.user, name="user"),
path("subscribe", views.subscribe, name="subscribe"),
path("file", views.file, name="file"),

]