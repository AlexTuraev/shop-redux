// компонент для отображения сетки товаров
import React from 'react';
import {connect} from 'react-redux';

import './items-grid.css';
import ItemCard from '../item-card';
import {withDoorServices} from '../hoc';

class ItemsGrid extends React.Component {
    render(){
        const {items} = this.props;
        return(
                <ul className='item-grid__ul'>
                    {
                        items.map( ({id, title, imgUrl, price, itemUrl})=>{

                            return(
                                <li key={'product'+id}><ItemCard id={id} title={title} imgUrl={imgUrl} price={price} itemUrl={itemUrl}/></li>
                            );
                        })
                    }
                </ul>
            );
    }
}
        


const mapStateToProps = ({items}) => {

    const itemsNew = items.map((item) => {
        const {title='No title', pictures=[{small: null}], price='No Data', id, itemUrl} = item;
        
        return {
            title,
            imgUrl: pictures[0].small,
            price,
            id,
            itemUrl
        };
    });

    return{
        items: [...itemsNew]
    };
}

export default withDoorServices(
    connect(mapStateToProps)(ItemsGrid)
);