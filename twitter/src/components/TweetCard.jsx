import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext, useState } from 'react';
import { TweetContext } from './TweetProvider';
import axios from 'axios';

function TweetCard(props) {


    const [tweets, setTweets] = useContext(TweetContext);
    const [editTweet, setEditTweet] = useState(null);


    const handleEditTweet = async () => {
        try {
            const response = await axios.put(`http://127.0.0.1:8000/api/tweets/${editTweet.id}/`, { content: editTweet.content });
            setTweets(tweets.map(tweet => (tweet.id === editTweet.id ? response.data : tweet)));
            setEditTweet(null);
        } catch (error) {
            console.error('Error editing tweet:', error);
        }
    };

    const handleDeleteTweet = async (id) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/tweets/${id}/`);
            setTweets(tweets.filter(tweet => tweet.id !== id));
        } catch (error) {
            console.error('Error deleting tweet:', error);
        }
    };


    // const handleSaveTweet = async () => {
    //     try {
    //         setTweetList(tweetList.map((tweet) =>
    //             tweet.id === editTweet.id ? editTweet : tweet
    //         ));

    //         setEditTweet(null);
    //         alert("Tweet updated successfully!");
    //     } catch (error) {
    //         console.error("Error updating Tweet: ", error);
    //     }
    // };


    return (
        <>
            <Card style={{ width: '36rem' }} className='mt-5'>
                <Card.Title>{props.username}</Card.Title>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    {editTweet && editTweet.id === props.id ? <>
                        <form>
                            <Card.Text>
                                <p>Edit Tweet</p>
                                <input
                                    type="text"
                                    value={editTweet.content}
                                    onChange={(e) => setEditTweet({ ...editTweet, content: e.target.value })}
                                />
                            </Card.Text>

                            <Button type="submit" onClick={handleEditTweet}>Save</Button>
                            <Button variant="danger" onClick={() => setEditTweet(null)} >Cancel</Button>
                        </form> </> : <>
                        <Card.Text>
                            {props.text}
                        </Card.Text>
                        <Button onClick={() => setEditTweet(props)}>Edit</Button>
                        <Button variant="danger" onClick={() => handleDeleteTweet(props.id)}>Delete</Button> </>}
                </Card.Body>
            </Card >


        </>
    );
}

export default TweetCard;