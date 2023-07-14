from django.http import HttpResponse, HttpRequest
from django.views.decorators.http import require_GET, require_POST
from json import dumps, loads

from .example.hello_world import hello_world
from .example.accurate_model import compute_number

# Create your views here.

@require_GET
def hello(request):
    data = {
        "message": hello_world()
    }
    return HttpResponse(dumps(data))

@require_POST
def accurate_model(request: HttpRequest):
    request_json = loads(request.body)

    data = {
        "output": compute_number(request_json['input'])
    }
    return HttpResponse(dumps(data))
