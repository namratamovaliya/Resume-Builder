from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Resume
from .serializers import ResumeSerializer


@api_view(['POST'])
def create_resume(request):

    serializer = ResumeSerializer(data=request.data)

    if serializer.is_valid():

        serializer.save()

        return Response({
            "message": "Resume Created Successfully"
        })

    return Response(serializer.errors)


@api_view(['GET'])
def view_resume(request):

    resumes = Resume.objects.all()

    serializer = ResumeSerializer(
        resumes,
        many=True
    )

    return Response(serializer.data)


@api_view(['PUT'])
def update_resume(request, pk):

    resume = Resume.objects.get(id=pk)

    serializer = ResumeSerializer(
        resume,
        data=request.data
    )

    if serializer.is_valid():

        serializer.save()

        return Response({
            "message": "Resume Updated"
        })

    return Response(serializer.errors)


@api_view(['DELETE'])
def delete_resume(request, pk):

    resume = Resume.objects.get(id=pk)

    resume.delete()

    return Response({
        "message": "Resume Deleted"
    })