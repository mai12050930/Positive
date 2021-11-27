from django.shortcuts import render

def chat(request):
    return render(request, 'chat/chat.html')

def match(request):
    return render(request, 'chat/match.html')