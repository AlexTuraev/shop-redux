const ITEM_SELECTED = 'ITEM_SELECTED';
const PRODUCTS_UPDATE = 'PRODUCTS_UPDATE';
const ONE_PRODUCT_LOADED = 'ONE_PRODUCT_LOADED';
const FETCH_FAILURE = 'FETCH_FAILURE';
const PRODUCT_COLORS_LOADED = 'PRODUCT_COLORS_LOADED';
const PRODUCT_DEFINITION_LOADED = 'PRODUCT_DEFINITION_LOADED';

export{
    ITEM_SELECTED,              // выбран пункт меню категории
    PRODUCTS_UPDATE,            // обновлен компонент ItemsGrid 
    ONE_PRODUCT_LOADED,         // обновлен компонент Product_Details
    FETCH_FAILURE,
    PRODUCT_COLORS_LOADED,       // загружен продукт, загружен массив цветов продукта
    PRODUCT_DEFINITION_LOADED     // загружен продукт, загружен массив описаний продукта в state
}