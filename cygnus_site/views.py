from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.shortcuts import render
from django.template import RequestContext, loader
# Create your views here.

def index(request):
  template = loader.get_template('cygnus_site/index.html')
  context = RequestContext(request, {
    'path' : request.path.split('/')[1],
  })
  return HttpResponse(template.render(context))

def about(request):
  template = loader.get_template('cygnus_site/about.html')
  context = RequestContext(request, {
    'path' : request.path.split('/')[1],
  })
  return HttpResponse(template.render(context))

def services(request):
  template = loader.get_template('cygnus_site/services.html')
  context = RequestContext(request, {
    'path'   : request.path.split('/')[1],
    #'anchor' : request.GET['init'], this gives multikeydictkeyerror
    #http://stackoverflow.com/questions/5895588/django-multivaluedictkeyerror-error-how-do-i-deal-with-it
    'anchor' : request.GET.get('init', False),
  })
  return HttpResponse(template.render(context))

def pricing(request):
  template = loader.get_template('cygnus_site/pricing.html')
  context = RequestContext(request, {
    'path' : request.path.split('/')[1],
  })
  return HttpResponse(template.render(context))

def contact(request):
  template = loader.get_template('cygnus_site/contact.html')
  context = RequestContext(request, {
    'path' : request.path.split('/')[1],
  })
  return HttpResponse(template.render(context))