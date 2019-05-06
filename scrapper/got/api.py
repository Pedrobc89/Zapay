from got.models import Products
from rest_framework import viewsets, permissions
from .serializers import ProductsSerializer

# Products viewsets


class ProductsViewSet(viewsets.ModelViewSet):
    queryset = Products.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProductsSerializer
