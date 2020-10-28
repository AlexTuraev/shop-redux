import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
//import { bindActionCreators } from 'redux';

import './product-details.css';
import ColorBox from '../color-box';
import Properties from '../properties';
import {withDoorServices} from '../hoc';
import {actionOneProductLoadedNew} from '../../actions';

class ProductDetails extends React.Component {
    componentDidMount(){
        const match1 = /\d+$/.exec(this.props.location.pathname);
        this.props.actionOneProductLoaded(parseInt(match1,10));

        //this.props.actionProductColorsLoaded(parseInt(match1,10));
    }

    componentDidUpdate(prevProps){
        const match1 = /\d+$/.exec(this.props.location.pathname);
        if(prevProps.location.pathname !== this.props.location.pathname){
            this.props.actionOneProductLoaded(parseInt(match1,10));
            //this.props.actionProductColorsLoaded(parseInt(match1,10));
        }
    }

    render(){
        const {title='no title', color='no data', price='no data', imgUrls=[], productColors} = this.props;

        const img1 = (imgUrls[0] !== undefined) ? <img src={imgUrls[0].medium} className='product-details__pic__img' alt='product'></img> : null;
        const img2 = (imgUrls[1] !== undefined) ? <img src={imgUrls[1].medium} className='product-details__pic__img' alt='product'></img> : null;

        return(
            <article className='product-details__main'>
                <section className='product-details__section'>
                    <div className='product-details__pic'>
                        <div className='product-details__div-img-container'>{img1}{img2}</div>
                                              
                        <ul className='product-details__ul-colors-box'>
                            {
                                productColors.map((el) => {
                                    return (
                                        <li key={'colorbox'+el.product_id}>
                                            <ColorBox {...el} />
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                    <aside className='product-details__description'>
                        <div className='product-details__title'>Наименование{title}</div>
                        <div className='product-details__name-color'>Цвет{color}</div>
                        <div className='product-details__price'>Цена {price}</div>
                    </aside>
                </section>

                <Properties />
            </article>
                
        );
    }
}

const mapStateToProps = ({oneProduct, productColors}) => {
    //const {title='No title', pictures=[{medium: null}], price='No Data', id} = oneProduct;
    const {title='No title', pictures=[], price='No Data', id} = oneProduct;

    return{
        title,
        //imgUrl: pictures[0].medium,
        imgUrls: [...pictures],
        price,
        id,
        productColors: productColors
    };
};


// ПОПРОБОВАТЬ thunkMiddleware. Установить npm install redux-thunk
// Подключить import applyMiddleware from 'redux' (для store=createStore(reducer, appleMiddleware(thunkMiddleware)))
// Подключить import thunkMiddleware from 'redux-thunk'
const mapDispatchToProps = (dispatch, ownProps) => {
    const {doorServices} = ownProps;

    return {
        actionOneProductLoaded: actionOneProductLoadedNew(doorServices, dispatch)
        //actionProductColorsLoaded: actionProductColorsLoaded(doorServices, dispatch)
    };
}

export default withDoorServices(
    withRouter(
        connect(mapStateToProps, mapDispatchToProps)(ProductDetails)
    )
);