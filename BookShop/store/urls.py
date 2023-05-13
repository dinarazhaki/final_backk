from django.urls import path
from . import views

app_name = 'store'

urlpatterns = [
	path('', views.index, name = "index"),
	path('login', views.signin, name="signin"),
	path('logout', views.signout, name="signout"),
	path('registration', views.registration, name="registration"),
	path('books', views.get_books, name="books"),
	path('category/<int:id>', views.get_book_category, name="category"),
	path('book/<int:id>', views.get_writer, name = "book"),
]
