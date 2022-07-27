from django import forms
from chunkit . models import Message

class MessageForm(forms.ModelForm):
    class Meta:
        model = Message
        fields = "__all__"
