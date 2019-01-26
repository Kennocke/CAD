from django.db import models
from django.utils import timezone
from django.core.exceptions import ValidationError

def validate_only_one_instance(obj):
	model = obj.__class__
	if (model.objects.count() > 2 and obj.id != model.objects.get().id):
		raise ValidationError("Can only create 3 %s instance" % model.__name__)

class Post(models.Model):
	author = models.ForeignKey('auth.User', on_delete=models.CASCADE)
	title = models.CharField(max_length=100)
	text = models.TextField()
	image = models.ImageField(blank=True, upload_to='img/', help_text='150x150px', verbose_name='Ссылка картинки')
	created_date = models.DateTimeField(default=timezone.now)
	published_date = models.DateTimeField(blank=True, null=True)

	def publish(self):
		self.published_date = timezone.now()
		self.save()

	def __str__(self):
		return self.title

	def clean(self):
		validate_only_one_instance(self)
