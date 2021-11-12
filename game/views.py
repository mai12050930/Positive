from django.shortcuts import render
from django.contrib.auth.decorators import login_required


def display_choice(request):
    return render(request, 'game/choice.html')

def display_clear(request):
    return render(request, 'game/clear.html')

def display_home(request):
    return render(request, 'game/home.html')

def display_match(request):
    return render(request, 'game/match.html')

# ホーム
@login_required
def home(request):
    params = {"UserID":request.user}
    return render(request, "game/home.html", context=params)