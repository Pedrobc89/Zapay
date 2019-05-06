from rest_framework import routers
from .api import TestViewSet

router = routers.DefaultRouter()
router.register('api/got', TestViewSet, 'got')

urlpatterns = router.urls
