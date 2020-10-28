// компонент для подробной информации по товару
import React from 'react';
import Catalog from '../../catalog';
import ProductDetails from '../../product-details';

import './product-page.css';

const ProductPage = () => {
    console.log('ProductPage loaded');
    return(
        <section className='product-page'>
            <Catalog />
            <ProductDetails />
        </section>
    );
}

export default ProductPage;