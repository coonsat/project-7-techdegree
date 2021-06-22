// Utility import
import React, {Component} from 'react';
import axios from 'axios';

// Internal import
import { flickrDeets } from '../config/config';

const GalleryContext = React.createContext();

export class Provider extends Component {

    state = {
        searchText: [],
        loading: true,
        photos: [],
        default: ['cats', 'dogs', 'computers']
    }

    randomSearch = () => {
        return this.state.default[Math.floor(Math.random() * this.state.default.length)];
    };

    searchPhotos = ( search = this.randomSearch() ) => {
        const query = `api_key=${flickrDeets.key}&tags=${search}&per_page=20&format=json&nojsoncallback=1`;
        axios.get(`https://api.flickr.com/services/rest?method=flickr.photos.search&${query}`)
          .then(response => {
            this.setState({
              photos: response.data.photos.photo,
              loading: false
            });
          })
          .catch(error => {
            console.log('Error fetching data from Flickr', error);
          });
    };

    updateSearch = (searchText) => {
        this.setState({
            searchText
        });
    };

    render() {
        return(
            <GalleryContext.Provider value={{
                photos: this.state.photos,
                loading: this.state.loading,
                actions: {
                    searchPhotos: this.searchPhotos,
                    updateSearch: this.updateSearch
                }
            }}>
                {this.props.children}
            </GalleryContext.Provider>
        );

    }
}

export const Consumer = GalleryContext.Consumer;