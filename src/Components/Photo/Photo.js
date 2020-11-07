import React from 'react'
import "./Photo.scss";

const Photo = ({alt_description, height, urls}) => {
    return (
        <div className="photo-details">
            <img className="photo" src={urls.small} style={{objectFit:'contain'}} alt={alt_description}/>
        </div>
    )
}

export default Photo
