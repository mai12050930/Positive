from django.shortcuts import render

def display_account(request):
    return render(request, 'accounts/account.html')

def display_top(request):
    return render(request, 'accounts/top.html')