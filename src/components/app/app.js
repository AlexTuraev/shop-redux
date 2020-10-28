import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './app.css';
import MenuHeader from '../menu-header';
import SearchPanel from '../search-panel';
import {HomePage, AboutPage, ProductPage} from '../pages';

const App = () => {
    return (
        <main className='main'>
            <MenuHeader />
            <SearchPanel />
            <Switch>
                <Route 
                    path='/' 
                    component={HomePage} exact={true} />
                <Route 
                    path='/catalog'
                    component={HomePage} />
                
                <Route 
                    path='/about'
                    component={AboutPage} />
            </Switch>
        </main>
    );
};


export default App;

/*<Route
                    path='/catalog/:id?'
                    component={ProductPage} />
*/