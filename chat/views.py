from django.shortcuts import render

def display_chat(request):
    return render(request, 'chat/chat.html')