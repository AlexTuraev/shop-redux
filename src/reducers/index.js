import updateCategories from './update-categories';
import updateItems from './update-items';
import updateOneProduct from './updateOneProduct';
import updateProductColors from './updateProductColors';
import updateProductProperties from './updateProductProperties';

const reducer = (state, action) => {
    return{
        categories: updateCategories(state, action),
        items: updateItems(state, action),
        oneProduct: updateOneProduct(state, action),
        productColors: updateProductColors(state, action),
        productProperties: updateProductProperties(state, action)
    };
};

export default reducer;