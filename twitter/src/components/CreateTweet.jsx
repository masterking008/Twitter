import Button from 'react-bootstrap/Button';
import { TweetContext } from './TweetProvider';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Card } from 'react-bootstrap';
import context from 'react-bootstrap/esm/AccordionContext';
import axios from 'axios';

function CreateTweet() {



    const { user } = useContext(AuthContext);

    const [tweets, setTweets] = useContext(TweetContext);
    const [image, setImage] = useState(null);
    const [text, setText] = useState("");

    const [newTweet, setNewTweet] = useState('');

    const handleImage = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
 


    const handleCreateTweet = async (e) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/tweets/', {
                id: Date.now(),
                username: user.username,
                image: image,
                content: text
            });
            setTweets([...tweets, response.data]);
            setText("")
            setImage("")
            alert("Tweet added successfully!");
        } catch (error) {
            console.error('Error adding tweet:', error);
        }
    };





    return (
        <>
            <Card className='p-5 '>

                <form className="d-flex flex-column justify-content-center align-items-center " onSubmit={handleCreateTweet}>
                    <input
                        type="text"
                        placeholder="Scribble your thoughts"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        required
                    />
                    <br />
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImage}
                    />
                    <br />
                    <Button type="submit">Create Tweet</Button>
                </form>

            </Card>
        </>
    )
}

export default CreateTweet
