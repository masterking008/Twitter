import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext, useState } from 'react';
import { TweetContext } from './TweetProvider';
import axios from 'axios';

function TweetCard(props, showEditDelete) {


    const [tweets, setTweets] = useContext(TweetContext);

    return (
        <>
        <div >
            <Card className="card mt-5" >
                <Card.Title className='m-3 fw-bold'>{props.username}</Card.Title>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    {props.text}
                </Card.Body>
            </Card >
   
            </div>

        </>
    );
}

export default TweetCard;