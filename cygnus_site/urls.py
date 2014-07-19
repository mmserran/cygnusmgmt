# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls import patterns, include, url

from cygnus_site import views
urlpatterns = patterns('',
    url(r'^$', views.index),
    url(r'about', views.about),
    url(r'services', views.services),
    url(r'pricing', views.pricing),
    url(r'contact', views.contact),
) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)