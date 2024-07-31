import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { TweetContext } from './TweetProvider';
import TweetCard from './TweetCard';

const TweetList = () => {

  let [tweets, setTweets] = useContext(TweetContext);
  var revTweetList = reverseArray(tweets);
  tweets = revTweetList;
  

  
  function reverseArray(arr) {
    if (arr.length === 0) {
      return [];
    } else {
      return [arr[arr.length - 1]].concat(
        reverseArray(arr.slice(0, arr.length - 1))
      );
    }
  }




  return (
    <div>

        {tweets.length > 0 ? (
          tweets.map((tweet) => (
            <TweetCard
            key={tweet.id}
              id={tweet.id}
              username={tweet.username}
              image={tweet.image}
              text={tweet.content}
            />
          ))
        ) : (
          <div >
            <h2>Add Tweets :p</h2>
          </div>
        )}
    </div>
  );
};

export default TweetList;
