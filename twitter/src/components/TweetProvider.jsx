import axios from "axios";
import React, { useEffect } from "react";
import { createContext, useState } from "react";

export const TweetContext = createContext();

export const TweetProvider = (props) => {


  const [tweetList, setTweetList] = useState([]);

  useEffect(() => {
    const fetchTweets = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/tweets/');
            setTweetList(response.data);
        } catch (error) {
            console.error('Error fetching tweets:', error);
        }
    };

    fetchTweets();
}, []);


  return (
    <TweetContext.Provider value={[tweetList, setTweetList]}>
      {props.children}
    </TweetContext.Provider>
  );
};
