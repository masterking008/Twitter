import React from 'react';
import { useLocation } from 'react-router-dom';

const SpecialContent = () => {
    const location = useLocation();

    // Conditionally render content based on the current route
    if (location.pathname !== '/special') {
        return null; // Do not render anything if not on the special page
    }

    return (
        <div>
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
                        {user ? <p></p> : <> <Button onClick={() => setEditTweet(props)}>Edit</Button>

                            <Button variant="danger" onClick={() => handleDeleteTweet(props.id)}>Delete</Button> </>}

                    </>}
        </div>
    );
};

export default SpecialContent;
