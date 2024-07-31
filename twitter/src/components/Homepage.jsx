
import TweetCard from './TweetCard';
import { useContext } from 'react';
import { TweetContext } from './TweetProvider';
import CreateTweet from './CreateTweet';
import Authentication from './Authentication';
import Profile from './Profile';
import TweetList from './TweetList';

const HomePage = () => { 

    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center mt-5 min-vh-100">
                <CreateTweet />
                <TweetList/>
            </div>
        </>

    );
}

export default HomePage;

