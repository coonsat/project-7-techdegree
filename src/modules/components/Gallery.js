// Utility import
import React from 'react'

// Internal import
import Photo from '../components/Photo';
import { Consumer } from '../contexts';

const Gallery = ({ location }) => {

    const parsePhotos = (photos) => {
        return photos.map( (photo, index) => {
            return <Photo url={`http://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
                          key={index}>
                   </Photo>
        });
    };


    return (
        <Consumer>
            { ({ photos, searchText, actions, loading }) => {
                const path = location.pathname.substring( location.pathname.lastIndexOf("/") + 1 );

                if ( path === '' && searchText === '' ) {
                    actions.searchPhotos();
                }

                if (path !== searchText) {
                    actions.searchPhotos(path)
                }

                const gallery = parsePhotos(photos);


                return(
                    
                    <div className="photo-container">
                        <ul>
                            {loading 
                                ? <h3>Loading...</h3> 
                                : gallery.length > 0 
                                ? gallery 
                                : <h3>No items found</h3>
                            }
                        </ul>
                    </div>
                )
            }}
        </Consumer>

    )
}

export default Gallery;