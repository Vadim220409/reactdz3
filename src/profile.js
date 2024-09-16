import React  from "react";
import PropTypes from 'prop-types';
import './profile.css'


export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <div className="userProfile">
            <div className="description">
                <img 
                    src={avatar} 
                    alt="User avatar" 
                    className="userAvatar"
                />
                <p className="userName">{username}</p>
                <p className="userTag">{tag}</p>
                <p className="userLocation">{location}</p>
            </div>
            <ul className="userStats">
                <li>
                    <span className="userLabel">Followers</span>
                    <span className="userQuantity">{stats.followers}</span>
                </li>
                <li>
                    <span className="userLabel">Views</span>
                    <span className="userQuantity">{stats.views}</span>
                </li>
                <li>
                    <span className="userLabel">Likes</span>
                    <span className="userQuantity">{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}


Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired
}

export default Profile;