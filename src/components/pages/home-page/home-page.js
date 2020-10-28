import React from 'react';
//import {Switch, Route} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

import './home-page.css';
//import SearchPanel from '../../search-panel';
import Catalog from '../../catalog';
import ItemsGrid from '../../items-grid';
import ProductDetails from '../../product-details';

const HomePage = ({location:{pathname}}) => {
    let pageComponent = null;
    if (/(item\d+)$/.test(pathname)){
        pageComponent = <ProductDetails />;
    } else {
        pageComponent = <ItemsGrid />;
    }

    return (
        <div className='home-page'> 
            <Catalog />
            {pageComponent}
        </div>
    );
}

export default withRouter(HomePage);