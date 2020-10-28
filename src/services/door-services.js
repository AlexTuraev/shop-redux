import doorsDataJSON from './json-bravo/bravo.json'; // JSON-object - данные по дверям дя теста
//import doorsData from './doors-data';

let doorsData = doorsDataJSON; // для имитации получения данных, впоследствии на сервере можно будет также исп-ть для модификации исходного JSON

export default class DoorServices {
    constructor(){
        const products = doorsData.products;
        const categories = doorsData.categories;

        const newProductsArray = products.map(el => {
            let id=el.category_id;
            let itemUrl = `/folder${id}/item${el.id}`;

            while(id !== null){
                id = categories.find((el)=>el.id===id)
                        .parent_id;
                if(id !== null){
                    itemUrl = `/folder${id}${itemUrl}`;
                }
            }
            itemUrl = `/catalog/${itemUrl}`;
            return {...el, itemUrl}; // добавляем новое поле строку с Url для роутинга
        });
        doorsData = {...doorsData, products: newProductsArray};
        //console.log(doorsData);
    }

    getAllData(){
        return new Promise((resolve, reject)=>{
            if(Math.random() > 1){
                console.log('Reject from getAllData()');
                reject(new Error ('Some error happened'));
            }
            else{
                resolve(doorsData);
            }
        });
    };

        // получает массив объектов всех <json>.categories
    async getCategoriesData() {
        const data = await this.getAllData();
        return data.categories;
    };

        // получает массив объектов всех <json>.products
    async getProductsData() {
        const data = await this.getAllData();
        return data.products;
    };

        // получает данные объекта с id===idSearch из массива объектов <json>.products
    async getOneProductData(idSearch) {
        const data = await this.getProductsData();
        return data.find(({id}) => id===idSearch);

        // Как правильно возвращать с точки зрения функци программирования и чистой ф-ции? Может так:
        // return {...data.find(({id}) => id===idSearch)};
    }

    // ----------------------------------------------------------------------------------------
    /**
     * getArrUrlColors - возвращает массив объектов [{title - цвет, urlColor - ссылка на цвет, id: id-продукта}],  к-е возможны для данной модели product
     * idArg - id продукта из массива <json>.products
     */
    async getArrUrlColors(idArg){
        // получение массивов продуктов (products) и цветов (colors) из json
        const {colors, products} = await this.getAllData()
            .then((data)=>data);

        const prodArg = products.find(el => el.id===idArg); // находим {} продукта с заданным id===idArg
        
        const colorIds = products
            .filter((el) => (el.title===prodArg.title && el.category_id===prodArg.category_id)) // отбор моделей одного наименования и категории (напр, все двери "Порта-21")
            .map((el) => {                                                                      // для каждой модели возвращаем объект {color_id: цвет, product_id: id модели в products}
                return({
                    color_id: el.color_id,
                    product_id: el.id
                });
            });                                                          

        // 
        const filteredColors = colorIds.map((color) => {
            if(color.color_id===null) return null;
            const colorMatch = colors.find((el) => el.id===color.color_id);
            return{
                ...colorMatch, product_id: color.product_id
            };
        });
      
        const resultColors = [];
        filteredColors.forEach( el => {
            if (el !== null){
                resultColors.push({
                    title: el.title, // название цвета
                    urlColor: el.picture, // ссылка на рисунок с цветом
                    product_id: el.product_id
                });
            };
        });

        return [...resultColors];
    }
    // ----------------------------------------------------------------------------------------
    /**
     * 
     * @param {*} product 
     * Вовзращает массив объектов [{id, propertyName, definition}, ...]
     */
    async getProductProperties(productId){
        const {properties, property_values: propertyValues, products} = await this.getAllData()
            .then(data => data);
        
        const results = products
                .find(el => el.id === productId)
                .properties.map(prodItem => {
                    return{
                        id: 'properties'+prodItem.id,
                        propertyName: properties.find(pr => pr.id===prodItem.id).title,
                        definition: propertyValues.find(prV => prV.id===prodItem.value_id).title
                    };
                });

        return [...results];
    }
}