from django.contrib import admin
from .models import File, Message,Subscribe

admin.site.register(File)
admin.site.register(Message)
admin.site.register(Subscribe)

# Register your models here.
