from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

tweets = [
    {"id": 1, "username": "user1", "content": "This is the first tweet"},
]

@api_view(['GET', 'POST'])
def tweet_list(request):
    if request.method == 'GET':
        return Response(tweets)
    
    if request.method == 'POST':
        new_tweet = request.data
        new_tweet['id'] = len(tweets) + 1
        tweets.append(new_tweet)
        return Response(new_tweet, status=status.HTTP_201_CREATED)

@api_view(['PUT', 'DELETE'])
def tweet_detail(request, pk):
    tweet = next((tweet for tweet in tweets if tweet["id"] == pk), None)
    if tweet is None:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'PUT':
        tweet.update(request.data)
        return Response(tweet)
    
    if request.method == 'DELETE':
        tweets.remove(tweet)
        return Response(status=status.HTTP_204_NO_CONTENT)
