// Utility import
import React from 'react'

// Internal import
import Photo from '../components/Photo';
import { Consumer } from '../contexts';

const Gallery = () => {
    return (

        <Consumer>
            { ({ photos }) => {
                const gallery = photos.map( (photo, index) => {
                    return <Photo url={`http://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
                                  key={index}>
                           </Photo>
                });

                return(
                    
                    <div className="photo-container">
                        <ul>
                            {gallery ? gallery : "No items found"}
                        </ul>
                    </div>
                )
            }}
        </Consumer>

    )
}

export default Gallery;