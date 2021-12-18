from django.shortcuts import redirect, render
from django.contrib.auth.decorators import login_required
from game.models import Log
from django.utils import timezone


def choice(request):
    return render(request, 'game/choice.html')

def clear(request):
    return render(request, 'game/clear.html')

def match(request):
    logs = Log.objects.all()
    data = {'logs' : logs}
    return render(request, 'game/match.html', data)

# ホーム
@login_required
def home(request):
    params = {"UserID":request.user}
    return render(request, "game/home.html", context=params)

def create_log(request):
    if request.method == 'POST':
        log = Log.objects.create(
            username = request.POST['username'],
            roomname = request.POST['roomname'],
            comment = request.POST['comment'],
            time = timezone.datetime.now(),
        )
        return redirect('chat')
    return render(request, 'game/help_log.html')