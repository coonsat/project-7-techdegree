// Utility import
import React from 'react'

// Internal import
import Photo from '../components/Photo';
import { Consumer } from '../contexts';

const Gallery = ({ location }) => {

    //Arrow function responsible for rendering the array of jsx images
    const parsePhotos = (photos) => {
        return photos.map( (photo, index) => {
            return <Photo url={`http://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
                          key={index}>
                   </Photo>
        });
    };


    return (
        //Component receives destructured elements from context api
        <Consumer>
            { ({ photos, searchText, actions, loading }) => {

                //Find the path given in the route by accesstion the location object
                const path = location.pathname.substring( location.pathname.lastIndexOf("/") + 1 );

                //If both path AND search text are empty then trigger a random search
                if ( path === '' && searchText === '' ) {
                    actions.searchPhotos();
                }

                //If path is different to search text then force a search based on the new location
                if (path !== searchText) {
                    actions.searchPhotos(path)
                }

                //Pass array of photos from flicker to parsing function
                const gallery = parsePhotos(photos);

                return(
                    // Show loading if true.
                    // If pictures found then show gallery
                    // If not then display no items found 
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