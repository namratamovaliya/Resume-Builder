from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import RegisterSerializer

@api_view(['POST'])
def register(request):
    serializer = RegisterSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response({
            "message": "User Registered Successfully"
        })

    return Response(serializer.errors)



from django.http import HttpResponse

def home(request):
    return HttpResponse("Resume Maker Backend Running")

from django.contrib.auth import authenticate
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['POST'])
def login(request):

    username = request.data.get('username')
    password = request.data.get('password')

    user = authenticate(
        username=username,
        password=password
    )

    if user:
        return Response({
            'message': 'Login Success'
        })

    return Response({
        'message': 'Invalid Credentials'
    })