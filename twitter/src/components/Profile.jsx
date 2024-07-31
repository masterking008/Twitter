import { useContext, useEffect, useState } from "react"
import { TweetContext } from "./TweetProvider";
import CreateTweet from "./CreateTweet";
import { AuthContext } from "../context/AuthContext";
import ProTweetCard from "./ProTweetCard";


function Profile() {

  const { user } = useContext(AuthContext);
  const [tweets, setTweets] = useContext(TweetContext);
  var filteredTweets = tweets.filter(tweet => tweet.username === user.username);

  var revTweetList = reverseArray(filteredTweets);
  filteredTweets = revTweetList;
  
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
    <>
      <div className="d-flex flex-column justify-content-around align-items-center mt-5 min-vh-100">
        <h1>Welcome to your Profile Page </h1>
        <CreateTweet />

        {filteredTweets.length > 0 ? (
          filteredTweets.map((tweet) => (
            <ProTweetCard
              key={tweet.id}
              id={tweet.id}
              username={tweet.username}
              image={tweet.image}
              text={tweet.content}
              showEditDelete={true}
            />
          ))
        ) : (
          <div >
            <h2>Add Tweets :p</h2>
          </div>
        )}
      </div>



    </>
  )
}

export default Profile
