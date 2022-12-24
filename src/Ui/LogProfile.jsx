import React from 'react';
import ProfilePic from '../assets/foto__david.jpeg'

const LogProfile = ({ user }) => {
    return (
        <div className='profile__wrapper click'>
            <h1 className="username">{user.email[0].toUpperCase()}</h1>
        </div>
    );
}

export default LogProfile;
