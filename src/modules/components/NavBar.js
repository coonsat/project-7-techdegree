// Utility import
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Consumer } from '../contexts';

const NavBar = () => {
    return (
        <Consumer>
            { ({ actions }) => {
                const quickSearch = (search) => {
                    actions.searchPhotos(search);
                };

                return (
                    <nav className="main-nav">
                        <ul>
                            <li>
                                <NavLink to='/search/cats' 
                                         onClick={() => quickSearch('cats')}>
                                            Cats
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/search/dogs'
                                         onClick={() => quickSearch('dogs')}>
                                             Dogs
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/search/computers'
                                         onClick={() => quickSearch('computers')}>
                                             Computers
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                );
            }}
        </Consumer>

    );
}

export default NavBar;
