import logging
import json
from typing import Any
from django.http import HttpRequest, HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import TemplateView


logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Create your views here.


# Index Page
class Index(TemplateView):
    template_name = "base.html"