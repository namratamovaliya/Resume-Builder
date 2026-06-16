from django.urls import path

from .views import (
    create_resume,
    view_resume,
    update_resume,
    delete_resume
)

urlpatterns = [

    path(
        'create-resume/',
        create_resume
    ),

    path(
        'view-resume/',
        view_resume
    ),

    path(
        'update-resume/<int:pk>/',
        update_resume
    ),

    path(
        'delete-resume/<int:pk>/',
        delete_resume
    ),

]