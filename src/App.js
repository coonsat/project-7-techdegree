//Utility import
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Component import
import SearchForm from './modules/components/SearchForm';
import NavBar from './modules/components/NavBar';
import Gallery from './modules/components/Gallery';

//Styling import
import './index.css';

const App = () => {

    return (

      <BrowserRouter>
        <div className="container">
          <SearchForm />
          <NavBar />
          <Switch>
            <Route exact path='/' component={Gallery}/>
            <Route path='/search/:params' component={Gallery}/>
          </Switch>
        </div>
      </BrowserRouter>

    );
}

export default App;
