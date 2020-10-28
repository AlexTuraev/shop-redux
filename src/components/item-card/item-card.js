// компонент для отображения карточки товара в сетке товаров
import React from 'react';
import {withRouter} from 'react-router-dom';

import './item-card.css';

const ItemCard = ({id, imgUrl, title, price, itemUrl, history}) => {

    //onClick={()=>history.push(`/catalog/test-product-page/item${id}`)}>
    //onClick={()=>history.push(`${location.pathname}/test-product-page/item${id}`)}>
    return(
        <div className='item-card'
            onClick={()=>history.push(`${itemUrl}`)}>
            <div title={title}>{title}</div>
            <img src={imgUrl} className='item-card__img' alt='ware card'></img>
            <div>Цена: {price}</div>
            <div className='item-card__modal' />
            <span className='item-card__modal'>Подробнее</span>
        </div>
    );
}

export default withRouter(ItemCard);