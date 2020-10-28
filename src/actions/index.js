import * as names from './names_actions';

/* 
    Раскрывает иерархию графа, к-й задан массивом arr = [{id, parent_id}, {id, parent_id},...].
    Выстраивает массив объектов из поля <json>.categories.
*/
const openHierarchy = (arr, idValue) => {
    let id=idValue;
    const chains = [id];

    while(id !== null){
        id = arr.find((el)=>el.id===id)
                .parent_id;
        chains.unshift(id);
    }

    const result = [];
    let path = '';
    chains.forEach((id) => {
        const newElements = arr.filter((el)=>el.parent_id===id);
        path += id ? '/folder'+id.toString() : ''; // path добавляем путь, при условии, что id !== null
        
        newElements.forEach(el=>{
            el.myPath = `${path}/folder${el.id}`;
        });
        const idx = result.findIndex((el)=>el.id===id);
        result.splice(idx+1, 0, ...newElements);
    });

    return result;
}

// Отбирает продукты из data=[{}] одной категории id
const selectItemsProducts = (data, id) => {
    return data.filter(el=>el.category_id===id);
}

// отбирает продукты из data=[{}] одного наименования title
/*
data - массив объектов [{продукт}, ...]
title - начальные набираемые буквы в строке поиска SearchPanel
*/
const selectProductsByTitle = (data, title) => {
    let dataNew = [];
    if(title.length > 0){
        dataNew = data.filter(el => {
            return(el.title.toUpperCase().indexOf(title.toUpperCase()) !== -1);
        });
    }
    return [...dataNew];
}

// -------------------------------------------------------
// Вспомогательные функции для запроса, обработки и dispatch данных
// ***************************************************************** /*
const actionError = (err) => {
    return{
        type: 'FETCH_FAILURE',
        payload: err
    };
};

const actionDataLoaded = (actionType, dispatch) => (data) => {
    dispatch({
        type: actionType,
        payload: data
    });
};

/*  const actionRequest = ({doorServices - объект класса сервисных ф-ций, 
    getDataMethod - строка наименование сервисной ф-ции doorServices,
    argsGetDataMethod=[] - массив аргументов для функции doorServices[getDataMethod],
    actionType - наименование action.type, 
    dispatch - ссылка на одноименную функцию, 
    processWithData - ссылка на функцию, которая обрабатывает полученные данные data и выдает новый map этих данных, если undefined, то просто передадутся данные data без изменений
    argsProcessWithData=[] - массив дополнительных аргументов для ф-ции processWithData, к-е нужны для маппинга данных ,напр, id продукта})
*/
const actionRequest = ({doorServices, getDataMethod, argsGetDataMethod=[], actionType, dispatch, processWithData, argsProcessWithData=[]}) => {
    doorServices[getDataMethod](...argsGetDataMethod)
        .then((data) => {
            actionDataLoaded(actionType, dispatch)
                (processWithData===undefined? data : processWithData(data, ...argsProcessWithData));
        })
        .catch(err=>{
            actionError(err);
        });
}
// ***************************************************************** */
// -------------------------------------------------------

export const itemSelectedNew = (doorServices, dispatch) => (id) => {
    actionRequest({doorServices, getDataMethod:'getCategoriesData', actionType: names.ITEM_SELECTED, dispatch, processWithData: openHierarchy, argsProcessWithData: [id]});
    actionRequest({doorServices, getDataMethod: 'getProductsData', actionType: names.PRODUCTS_UPDATE, dispatch, processWithData: selectItemsProducts, argsProcessWithData: [id]});
}

export const actionOneProductLoadedNew = (doorServices, dispatch) => (id) => {
    actionRequest({doorServices, getDataMethod: 'getOneProductData', argsGetDataMethod: [id], actionType: names.ONE_PRODUCT_LOADED, dispatch}); // обновление redux-state для ProductDetails

    actionRequest({doorServices, getDataMethod: 'getProductProperties', argsGetDataMethod: [id], actionType: names.PRODUCT_DEFINITION_LOADED, dispatch}); // обновление Redux-State для компонента Properties

    actionRequest({doorServices, getDataMethod: 'getArrUrlColors', argsGetDataMethod: [id], actionType: names.PRODUCT_COLORS_LOADED, dispatch}); // обновление state.productColors
}

// диспатчит PRODUCTS_UPDATE для формирования state.items для отображения продуктов из поисковой панели SearchPanel
export const actionSearchPanel = (doorServices, dispatch) => (title) => {
    actionRequest({doorServices, getDataMethod: 'getProductsData', actionType: names.PRODUCTS_UPDATE, dispatch, processWithData: selectProductsByTitle, argsProcessWithData: [title]});
}






















/*export const itemSelectedOld = (doorServices, dispatch) => (id) => {
    doorServices.getCategoriesData()
        .then((data) => {
            dispatch({
                type: names.ITEM_SELECTED,
                payload: openHierarchy(data, id)
            });
        });
    
    doorServices.getProductsData()
        .then((data) => {
            dispatch({
                type: names.PRODUCTS_UPDATE,
                payload: selectItemsProducts(data, id)
            });
        })
}

export const actionOneProductLoadedOld = (doorServices, dispatch) => (id) => {
    doorServices.getOneProductData(id)
        .then((data)=>{
            dispatch({
                type: names.ONE_PRODUCT_LOADED,
                payload: (data!==undefined) ? data : {}
            });
        });
};
*/