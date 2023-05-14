from django.urls import path
from django.conf import settings
from . import views
from django.conf.urls.static import static

app_name = 'feedback'
urlpatterns = [
    path('', views.index, name='index'),
    path('login', views.login, name='login'),
    path('login/process', views.process, name='process'),
    path('adminhome',views.adminhome, name="adminhome"),




] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
