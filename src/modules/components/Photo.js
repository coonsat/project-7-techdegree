import React from 'react';

// Photo component's sole responsibility is rendering the image
const Photo = ({ url }) => {
    return (
        <li>
            <img src={url} alt="" />            
        </li>
    )
}

export default Photo;