from django import forms
from chunkit . models import Message, Subscribe

class MessageForm(forms.ModelForm):
    class Meta:
        model = Message
        fields = "__all__"

class SubscribeForm(forms.ModelForm):
    class Meta:
        model = Subscribe
        fields ="__all__"
