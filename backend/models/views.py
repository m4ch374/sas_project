from django.http import HttpResponse
from django.views.decorators.http import require_GET

# Create your views here.

@require_GET
def hello(request):
    data = {
        "message": "hello world"
    }

    return HttpResponse(
        data
    )
