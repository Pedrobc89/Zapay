from rest_framework import routers
from .api import ProductsViewSet

router = routers.DefaultRouter()
router.register('api/got', ProductsViewSet, 'got')

urlpatterns = router.urls
