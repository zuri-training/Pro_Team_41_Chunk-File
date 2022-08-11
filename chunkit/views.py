from django.shortcuts import render,redirect
from django.contrib.auth.models import User
from django.http import HttpResponse
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.core.files import File as DjangoFile
from django.core.files.base import ContentFile
from django.utils.html import strip_tags
from django.conf import settings
from .forms import MessageForm, SubscribeForm
from . models import File, Message,Subscribe
import pandas as pd
import shutil
import time
import os

# Create your views here.
# ******************* HOME VIEW *****************************
def landing_page(request):
    return render(request,'landing_page.html')

# ******************* DOWNLOAD VIEW *****************************
@login_required(login_url="login")
def download(request, file_id):
    file = File.objects.filter(id=file_id).first()
    context = {"file":file}
    return render(request, 'dashboard-chunk.html',context)


# ******************* REGISTER VIEW *****************************
def register(request):
    if request.method == "POST":
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']

        if User.objects.filter(username=username):
            messages.error(request, "Username Already Exist")
            return redirect("register")

        if User.objects.filter(email=email):
            messages.error(request, "Email Already Exist")
            return redirect("register")

        if len(username)< 4:
            messages.error(request, "Username must be atleast 4 characters")
            return redirect("register")

        if not username.isalnum():
            messages.error(request, "username must be Alph-Numeric")
            return redirect("register")

        myuser = User.objects.create_user(username, email, password)
        myuser.save()
        
        messages.success(request, "Your account has been successfully created")
        return redirect("login")
    
    return render(request,'register.html')


# ******************* LOGIN VIEW *****************************
def sign_in(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']

        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('save_file')

        else:
            messages.error(request, "Invalid Credential")
            return redirect("login")
    return render(request,'login.html')


# ******************* FAQS VIEW *****************************
def faq(request):        
    return render(request,'f.html')

# ******************* FAQS VIEW *****************************
def doc(request):        
    return render(request,'doc.html')

# ******************* ABOUT VIEW *****************************
def about(request):
    return render(request,'about.html')

# ******************* SETTING VIEW *****************************
@login_required(login_url="login")
def setting(request):
    if request.method == 'POST':
        old_password = request.POST['old']
        new_password = request.POST['new']
        user = authenticate(username=request.user.username,password=old_password)
        if(user):
            user.set_password(new_password)
            user.save()
            messages.error(request, "Password changed successfully")
            return redirect('save_file')
        else:
            messages.error(request, "Incorrect old password")
            return redirect('setting')
    return render(request,'setting.html')

# ******************* SAVE FILES VIEW *****************************
@login_required(login_url="login")
def save_file(request):
    files = File.objects.filter(user=request.user).order_by("-id")
    context = {
        'files':files
    }
    if request.method == 'POST':
        name = request.POST.get("name")
        type = request.POST.get("type")
        file_data = request.FILES.get("file")
        #fSize = str(os.path.getsize(file_data))
        #print(fSize)
        file_count = request.POST.get("file_count") or 2
        file_count = int(file_count)
        if file_count <= 0:
            messages.error(request, "chunk number cannot be zero or negative number")
            return redirect(request.META.get("HTTP_REFERER"))
        user = request.user
        file = File.objects.create(file=file_data,chunk_number=file_count,user=user,name=name,file_type=type)
        url = file.file.url
        url = str(settings.BASE_DIR)+url.replace("/","\\")
        if url.split(".")[-1] not in ["json","csv"]:
            messages.error(request, "Please upload csv or json file")
            return redirect(request.META.get("HTTP_REFERER"))

        # ******************* CSV OPTION *****************************
        if url.split(".")[-1] == 'csv':
            df = pd.read_csv(url)
            rows_per_file = df.shape[0] // file_count
            folder_name = str(settings.BASE_DIR) + "\\temp\\" + str(int(time.time()*1000))
            os.makedirs(folder_name)
            for row_start in range(0, df.shape[0], rows_per_file):
                new_file  = df[row_start:row_start+rows_per_file]
                new_file.to_csv(f"{folder_name}/chunk_{row_start}.csv")

            outputfile = str(settings.MEDIA_ROOT) + f"\\processed-files\\{name}"
            shutil.make_archive(outputfile, 'zip', folder_name)
            file.processed_file = f"/processed-files/{name}.zip"
            file.save()
            return redirect("download", file.id)

        # ******************* JSON OPTION *****************************
        if url.split(".")[-1] == 'json':
            df = pd.read_json(url)
            rows_per_file = df.shape[0] // file_count
            folder_name = str(settings.BASE_DIR) + "\\temp\\" + str(int(time.time()*1000))
            os.makedirs(folder_name)
            for row_start in range(0, df.shape[0], rows_per_file):
                new_file  = df[row_start:row_start+rows_per_file]
                new_file.to_json(f"{folder_name}/chunk_{row_start}.json",indent=1,orient='records')

            outputfile = str(settings.MEDIA_ROOT) + f"\\processed-json-files\\folder_name"
            shutil.make_archive(outputfile, 'zip', folder_name)
            file.processed_file = f"/processed-json-files/folder_name.zip"
            file.save()
            return redirect("download", file.id) 
    return render(request,'save_file.html',context)
    
# ******************* DELETE FILES VIEW *****************************
@login_required(login_url="login")
def file_delete(request, pk):
    file = File.objects.get(id=pk)
    if request.method == 'POST':
        file.delete()
        return redirect('save_file')
    context = {
        'file':file
    }
    return render(request, "delete.html",context)

# ******************* HISTORY FILES VIEW *****************************
@login_required(login_url="login")
def history(request, pk):
    file = File.objects.get(id=pk)
    context = {
        'file':file
    }
    return render(request, "history.html",context)


# ******************* SEND VIEW *****************************
def send(request):
    form = MessageForm(request.POST)
    if form.is_valid():
        form.save()
        messages.success(request, "Message successfully sent")
        return redirect('faq')
    else:
        for field, error in form.errors.items():
            error = strip_tags(error)
            messages.error(request,f"{field}: {error}")
            return redirect('faq')


def subscribe(request):
    form = SubscribeForm(request.POST)
    if form.is_valid():
        form.save()
        messages.success(request, "Message successfully sent")
        return redirect('faq')

    
# ******************* LOGOUT VIEW *****************************
def signout(request):
    logout(request)
    messages.success(request, "You have successfully logged out")
    return redirect("login")



# ******************* ADMIN PAGE VIEW || HOME VIEW  *****************************
@login_required(login_url="admin_login")   
def admin_home(request):
    message_count = Message.objects.all().count()
    sub_count = Subscribe.objects.all().count()
    users_count = User.objects.all().count()
    file_count = File.objects.all().count()
    context = {
        'file_count':file_count,
        'users_count':users_count,
        'message_count':message_count,
        'sub_count':sub_count

    }
    return render(request,'admin/admin_home.html',context)

# ******************* ADMIN GET ALL MESSAGES VIEW *****************************
@login_required(login_url="admin_login")   
def message(request):
    file_count = File.objects.all().count()
    sub_count = Subscribe.objects.all().count()
    users_count = User.objects.all().count()
    messages = Message.objects.all().order_by("-id")
    message_count = Message.objects.all().count()
    context = {
        'messages':messages,
        'users_count':users_count,
        'file_count':file_count,
        'message_count':message_count,
        'sub_count':sub_count
    }
    return render(request,'admin/message.html',context)

# ******************* ADMIN GET ALL USER'S VIEW *****************************
@login_required(login_url="admin_login")   
def user(request):
    users = User.objects.all()
    message_count = Message.objects.all().count()
    file_count = File.objects.all().count()
    sub_count = Subscribe.objects.all().count()
    users_count = User.objects.all().count()
    context = {
        'users':users,
        'users_count':users_count,
        'file_count':file_count,
        'message_count':message_count,
        'sub_count':sub_count

    }
    return render(request,'admin/user.html',context)

# ******************* ADMIN GET ALL FILES VIEW *****************************
@login_required(login_url="admin_login")   
def file(request):
    message_count = Message.objects.all().count()
    users_count = User.objects.all().count()
    file_count = File.objects.all().count()
    sub_count = Subscribe.objects.all().count()

    context = {
        'file_count':file_count,
        'users_count':users_count,
        'message_count':message_count,
        'sub_count':sub_count
    }
    return render(request,'admin/file.html',context)

# ******************* ADMIN GET ALL SUBSCRIBERS VIEW *****************************
@login_required(login_url="admin_login")   
def subscribers(request):
    subscribers = Subscribe.objects.all()
    sub_count = Subscribe.objects.all().count()
    message_count = Message.objects.all().count()
    users_count = User.objects.all().count()
    file_count = File.objects.all().count()
    context = {
        'sub_count':sub_count,
        'file_count':file_count,
        'users_count':users_count,
        'message_count':message_count,
        'subscribers':subscribers
    }
    return render(request,'admin/subscribe.html',context)


# ******************* ADMIN LOGIN VIEW *****************************
def admin_login(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']

        user = authenticate(username=username, password=password)
        if user is not None and user.is_staff and user.is_superuser:
            login(request, user)
            return redirect('admin_home')

        else:
            messages.error(request, "Invalid Credential")
            return redirect("admin_login")

    return render(request, 'admin/admin_login.html')

# ******************* ADMIN LOGOUT  VIEW *****************************
def log_out(request):
    logout(request)
    messages.success(request, "You have successfully logged out")
    return redirect("admin_login")
