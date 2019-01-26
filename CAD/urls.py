from django.conf.urls import url
from . import views
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
	url(r'^$', views.post_list, name='post_list'),
	url(r'^faq', views.faq_page, name='faq_page'),
	url(r'^collab', views.collab_page, name='collab_page'),
	url(r'^pg', views.pg_page, name='pg_page'),
	url(r'^send', views.send_email, name='send_email'),
        url(r'^news/(?P<news_id>[0-3]+)', views.post_news, name='post_news'),
        url(r'^down', views.download, name='download'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += staticfiles_urlpatterns()
