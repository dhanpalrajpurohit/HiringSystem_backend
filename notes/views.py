from django.shortcuts import render
from rest_framework.views import APIView
from django.http import JsonResponse


from .models import Notes as NotesModel
from .serializers import NotesSerializer
# Create your views here.


class NotesList(APIView):
    def get(self, request):
        notes = NotesModel.objects.get()
        serializer = NotesSerializer(notes)
        serializer.is_valid(raise_exception=True)
        return JsonResponse({"data": serializer.data}, status=200)

    def post(self, request):
        note_serializer = NotesSerializer(data=request.data)
        note_serializer.is_valid(raise_exception=True)
        note_serializer.save()
        return JsonResponse({"data": note_serializer.data}, status=200)


class Notes(APIView):
    def get(self, request, pk: int):
        notes = NotesModel.objects.get(id=pk)
        serializer = NotesSerializer(notes)
        serializer.is_valid(raise_exception=True)
        return JsonResponse({"data": serializer.data}, status=200)

    def put(self, request, pk: int):
        notes = NotesModel.objects.get(id=pk)
        serializer = NotesSerializer(notes, data=request.data)
        serializer.is_valid(raise_exception=True)
        return JsonResponse({"data": serializer.data}, status=200)

    def delete(self, request, pk: int):
        notes = NotesModel.objects.get(id=pk)
        notes.delete()
        return JsonResponse(status=204)
