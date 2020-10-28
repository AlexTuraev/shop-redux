import * as names from '../actions/names_actions';

// формирует state.productColors (данные по возможным цветам для данной модели продукта)
const updateProductColors = (state, action) => {
    if (state===undefined){
        return [];
    }

    switch(action.type){
        case names.PRODUCT_COLORS_LOADED:
            return action.payload;
        default:
            return state.productColors;
    }
}

export default updateProductColors;