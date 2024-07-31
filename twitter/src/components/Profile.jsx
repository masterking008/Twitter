import { useContext, useEffect, useState } from "react"
import { TweetContext } from "./TweetProvider";
import TweetCard from "./TweetCard";
import CreateTweet from "./CreateTweet";
import { AuthContext } from "../context/AuthContext";


function Profile() {

  const { user } = useContext(AuthContext);
  const [myTweetList, setMyTweetList] = useState([])

  const [tweets, setTweets] = useContext(TweetContext);


  useEffect(() => {
    const newTweetList = tweets.filter((tweet) => tweet.username == user.username);
    setMyTweetList(newTweetList);
  }, [tweets]);


  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center mt-5 min-vh-100">
        <CreateTweet />
        {myTweetList.length > 0 ? (
          myTweetList.map((tweet) => (
            <TweetCard
              id={tweet.id}
              username={user.username}
              image={tweet.image}
              text={tweet.text}
              // showEditDelete={true}
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
