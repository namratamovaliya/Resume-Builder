from django.urls import path
from .views import register

urlpatterns = [
    path('register/', register),
]


from django.urls import path
from .views import register, login

urlpatterns = [
    path('register/', register),
    path('login/', login),
]