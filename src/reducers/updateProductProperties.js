import * as names from '../actions/names_actions';

// формирует state.productProperties [{propertyName, definition}, ...] - массив: [{свойство и его описание для продукта}]

const updateProductProperties = (state, action) => {
    if (state===undefined){
        return [];
    }

    switch(action.type){
        case names.PRODUCT_DEFINITION_LOADED:
            return action.payload;
        default:
            return state.productProperties;
    }
}

export default updateProductProperties;