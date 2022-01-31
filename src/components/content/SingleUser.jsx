import React from 'react';



const SingleUser = ({ user }) => {
    return (
        <div className="single-user">
            <div className="user-info">

                <img className="user-image" src={user.picture.large} alt="userImage" />
                <h3 className="user-name">{user.name.first} {user.name.last}</h3>
                <p className="user-email">Email: {user.email}</p>
                <p className="user-location">Email: {user.location.country} | {user.location.city}</p>
            </div>
        </div>
    )

}


export default SingleUser;
