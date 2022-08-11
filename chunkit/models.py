from django.db import models
from datetime import datetime
from django.contrib.auth.models import User

class File(models.Model):
    name = models.CharField(max_length=150, null=True)
    file = models.FileField(upload_to="uploads/user-files")
    processed_file = models.FileField(upload_to="uploads/processed-files",null=True,blank=True)
    file_type = models.CharField(max_length=50, null=True)
    file_size = models.CharField(max_length=50, null=True)
    chunk_number = models.PositiveIntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateTimeField(default=datetime.now, blank=True)


    def __str__(self):
        return f'{self.name}'


class Message(models.Model):
    name = models.CharField(max_length=100, null=True)
    email = models.EmailField()
    phone = models.PositiveIntegerField(null=True)
    message = models.TextField(max_length=1000)
    date = models.DateTimeField(default=datetime.now, blank=True)

    class Meta:
        verbose_name_plural = 'Message'

    def __str__(self):
        return f'{self.name}'

class Subscribe(models.Model):
    email = models.EmailField()
    date = models.DateTimeField(default=datetime.now, blank=True)

    
    class Meta:
        verbose_name_plural = 'Email'

    def __str__(self):
        return f'{self.email}'
