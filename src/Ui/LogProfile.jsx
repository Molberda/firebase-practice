import React from 'react';
import ProfilePic from '../assets/foto__david.jpeg'

const LogProfile = () => {
    return (
        <div className='profile__wrapper'>
            <img src={ProfilePic} alt="" className="profile__pic" />
        </div>
    );
}

export default LogProfile;
