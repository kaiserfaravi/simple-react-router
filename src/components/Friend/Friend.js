import React from 'react';
import { Link, useHistory } from 'react-router-dom';
const divStyle = {
    border: "3px solid green",
    borderRadius: '20px',

}


const Friend = (props) => {
    const { name, phone, website, address, id } = props.friend;
    const history = useHistory();
    const url = `/friend/${id}`;
    const handleAddClick = () => {
        history.push(`/friend/${id}`)
    }
    return (
        <div style={divStyle}>
            <h2>I am {name}{id} </h2>
            <h5>call me{phone} </h5>
            <p>visit me{website} </p>
            <p><small> I live in :{address.city} </small></p>
            <Link to={url}>Visit to me</Link>
            <br />
            <button onClick={handleAddClick} >visit me</button>
        </div>
    );
};

export default Friend;