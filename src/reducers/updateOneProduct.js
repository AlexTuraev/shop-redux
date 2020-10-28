import * as names from '../actions/names_actions';

// To accomplish state.oneProduct
const updateOneProduct = (state, action) => {
    if(state===undefined){
        return {};
    }

    switch(action.type){
        case names.ONE_PRODUCT_LOADED:
            return action.payload;
        default:
            return state.oneProduct;
    }
}

export default updateOneProduct;