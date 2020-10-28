import * as names from '../actions/names_actions';

// Формирует state.categories: [...]
const updateCategories = (state, action) => {
    if(state===undefined){
        return [];
    }

    switch(action.type){
        case names.ITEM_SELECTED:
            return action.payload;

        default: return state.categories;
    }
}

export default updateCategories;