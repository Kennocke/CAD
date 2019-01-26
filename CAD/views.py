from django.shortcuts import render
from django.conf import settings
from django.utils import timezone
from .models import Post
from django_user_agents.utils import get_user_agent
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import redirect

def post_list(request):
	user_agent = get_user_agent(request)
	if user_agent.is_mobile:
		return render(request, 'CAD/mobile/main.html')
	elif user_agent.is_tablet:
		return render(request, 'CAD/tablet/main.html')
	else:
		posts = Post.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
		return render(request, 'CAD/desktop/main.html', {'posts': posts})

def faq_page(request):
	user_agent = get_user_agent(request)
	if user_agent.is_tablet:
		return render(request, 'CAD/tablet/faq.html')
	elif user_agent.is_mobile:
		return render(request, 'CAD/mobile/faq.html')
	else:
		return render(request, 'CAD/desktop/faq.html')

def collab_page(request):
	return render(request, 'CAD/desktop/collab.html')

def pg_page(request):
	user_agent = get_user_agent(request)
	if user_agent.is_mobile:
		return render(request, 'CAD/mobile/pg.html')
	else:
		return render(request, 'CAD/desktop/pg.html')

def send_email(request):
	if request.method == 'POST':
		contact_form = request.POST
		subject = 'Интеграция и программирование в САПР'
		message = 'Здравствуйте. Вы воспользовались формой обратной связи. В ответном сообщении вы можете задать любой, интересующий вас вопрос. С уважением, команда разработчиков!'
		from_email = 'Stasvitkovskiy700@gmail.com'
		text = request.POST.get('emailText', '')
		if subject and message and from_email:
			try:
				send_mail(subject, message, from_email, [text])
			except BadHeaderError:
				return HttpResponse('Invalid header found.')
			return redirect('http://178.128.250.128/')
		else:
			return HttpResponse('Make sure all fields are entered and valid.')

def post_news(request, news_id):
        post_news = Post.objects.get(pk=news_id)
        return render(request, 'CAD/desktop/news.html', {'post_news': post_news})

def download(request, path):
    file_path = os.path.join(settings.MEDIA_ROOT, 'download/')
    if os.path.exists(file_path):
        with open(file_path, 'rb') as fh:
            response = HttpResponse(fh.read(), content_type="application/vnd.ms-excel")
            response['Content-Disposition'] = 'inline; filename=' + os.path.basename(file_path)
            return response
    raise Http404
