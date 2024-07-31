from django.urls import path
from .views import tweet_list, tweet_detail

urlpatterns = [
    path('tweets/', tweet_list, name='tweet_list'),
        path('tweets/<int:pk>/', tweet_detail, name='tweet_detail'),
]
