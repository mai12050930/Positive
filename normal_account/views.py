from django.shortcuts import render

def display_account(request):
    return render(request, 'normal_account/account.html')

def display_top(request):
    return render(request, 'normal_account/top.html')