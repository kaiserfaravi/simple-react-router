import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';


const FriendDetail = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({});
    const history = useHistory();

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))

    }, [])
    const handclick = () => {
        history.push('/friends');
    }
    return (
        <div>
            <h2>friend detail coming soon of {friendId} </h2>
            <h3>Frinde name : {friend.name}</h3>
            <h4>friend phone :{friend.phone} </h4>
            <p>works at{friend.company?.name} </p>
            <button onClick={handclick}>see all friends</button>
        </div>
    );
};

export default FriendDetail;