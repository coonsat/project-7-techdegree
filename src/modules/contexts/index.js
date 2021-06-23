// Utility import
import React, {Component} from 'react';
import axios from 'axios';

// Internal import
import { flickrDeets } from '../config/config';

const GalleryContext = React.createContext();

export class Provider extends Component {

    state = {
        searchText: '',
        loading: true,
        photos: [],
        default: ['cats', 'dogs', 'computers']
    }

    //randomise the selection of default search categories.
    randomSearch = () => {
        return this.state.default[Math.floor(Math.random() * this.state.default.length)];
    };

    //default search in case the route has no search parameters present
    searchPhotos = ( search = this.randomSearch() ) => {
        const query = `api_key=${flickrDeets.key}&tags=${search}&per_page=20&format=json&nojsoncallback=1`;
        axios.get(`https://api.flickr.com/services/rest?method=flickr.photos.search&${query}`)
          .then(response => {
            this.setState({
                searchText: search,
                photos: response.data.photos.photo,
                loading: false
            });
          })
          .catch(error => {
            console.log('Error fetching data from Flickr', error);
          });
    };

    // Export items to components
    render() {
        return(
            <GalleryContext.Provider value={{
                photos: this.state.photos,
                loading: this.state.loading,
                searchText: this.state.searchText,
                actions: {
                    searchPhotos: this.searchPhotos                }
            }}>
                {this.props.children}
            </GalleryContext.Provider>
        );

    }
}

export const Consumer = GalleryContext.Consumer;