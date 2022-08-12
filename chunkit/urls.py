from django.urls import path
from . import views
from django.contrib.auth import views as auth_views

urlpatterns = [
path("register", views.register, name="register"),
path("download/<str:file_id>", views.download, name="download"),
path("login", views.sign_in, name="login"),
path("faq", views.faq, name="faq"),
path("send", views.send, name="send"),
path("subscribe", views.subscribe, name="subscribe"),
path("", views.landing_page, name="landing_page"),
path("about", views.about, name="about"),
path("doc", views.doc, name="doc"),
path("setting", views.setting, name="setting"),
path("signout", views.signout, name="signout"),
path("save_file", views.save_file, name="save_file"),
path('detele/<int:pk>/', views.file_delete, name="delete"),
path('history/<int:pk>/', views.history, name="history"),


# ******************* RESET PASSWORD VIEW *****************************
path('password_change', auth_views.PasswordChangeView.as_view(
    ), name='password_change'),
    
# ******************* RESET PASSWORD VIEW *****************************
path('password_reset', auth_views.PasswordResetView.as_view(
    template_name='reset_password.html'), name='password_reset'),
path('password_reset_done', auth_views.PasswordResetDoneView.as_view(
    template_name='reset_password_done.html'), name='password_reset_done'),
path('password_reset_confirm/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(
    template_name='reset_password_confirm.html'), name='password_reset_confirm'),
path('password_reset_complete', auth_views.PasswordResetCompleteView.as_view(
    template_name='reset_password_complete.html'), name='password_reset_complete'),

# ******************* ADMIN PAGE VIEW *****************************
path("admin_home", views.admin_home, name="admin_home"),
path("message", views.message, name="message"),
path("user", views.user, name="user"),
path("subscribers", views.subscribers, name="subscribers"),
path("file", views.file, name="file"),
path("admin_login", views.admin_login, name="admin_login"),
path("logout", views.log_out, name="logout"),

]