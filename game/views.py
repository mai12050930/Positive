from django.shortcuts import render
from django.contrib.auth.decorators import login_required


def choice(request):
    return render(request, 'game/choice.html')

def clear(request):
    return render(request, 'game/clear.html')

# ホーム
@login_required
def home(request):
    params = {"UserID":request.user}
    return render(request, "game/home.html", context=params)