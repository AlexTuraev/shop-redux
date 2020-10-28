import * as names from '../actions/names_actions';

const updateItems = (state, action) => {
    if(state===undefined){
        return [];
    }

    switch(action.type){
        case names.PRODUCTS_UPDATE:
            return action.payload;
        default: 
            return state.items;
    }
}

export default updateItems;

/*const doorsTemp =[
    {
        "id": 15,
        "title": "М16",
        "url": "https://dveri.com/catalog/dveri-mezhkomnatnyye/dveri-iz-massiva/m16-t-08-venge",
        "category_id": 15,
        "color_id": 10,
        "glass_id": null,
        "accessory_group_id": 8,
        "trademark_id": 4,
        "price": 6006,
        "price_dealer": 4290,
        "discount": 0,
        "discount_dealer": 0,
        "label": null,
        "vendor_code": "011-0095",
        "position": 61,
        "pictures": [
          {
            "small": "https://dveri.com/storage/products/small/m-m16-t-08-venge-pg.jpg",
            "medium": "https://dveri.com/storage/products/medium/m-m16-t-08-venge-pg.jpg",
            "large": "https://dveri.com/storage/products/large/m-m16-t-08-venge-pg.jpg"
          }
        ],
        "options": [
          {
            "id": 242,
            "price": 6006,
            "price_dealer": 4290,
            "discount": 0,
            "discount_dealer": 0,
            "vendor_code": "011-0095",
            "title": "200*60",
            "label": null,
            "properties": []
          },
          {
            "id": 243,
            "price": 6006,
            "price_dealer": 4290,
            "discount": 0,
            "discount_dealer": 0,
            "vendor_code": "011-0096",
            "title": "200*70",
            "label": null,
            "properties": []
          },
          {
            "id": 244,
            "price": 6006,
            "price_dealer": 4290,
            "discount": 0,
            "discount_dealer": 0,
            "vendor_code": "011-0097",
            "title": "200*80",
            "label": null,
            "properties": []
          },
          {
            "id": 245,
            "price": 6006,
            "price_dealer": 4690,
            "discount": 0,
            "discount_dealer": 0,
            "vendor_code": "011-0098",
            "title": "200*90",
            "label": null,
            "properties": []
          }
        ],
        "properties": [
          {
            "id": 123,
            "value_id": 3565
          },
          {
            "id": 112,
            "value_id": 633
          },
          {
            "id": 77,
            "value_id": 109
          },
          {
            "id": 3,
            "value_id": 217
          },
          {
            "id": 4,
            "value_id": 218
          },
          {
            "id": 10,
            "value_id": 5
          },
          {
            "id": 59,
            "value_id": 161
          },
          {
            "id": 61,
            "value_id": 643
          }
        ]
      },
      {
        "id": 16,
        "title": "М16",
        "url": "https://dveri.com/catalog/dveri-mezhkomnatnyye/dveri-iz-massiva/m16-t-08-venge-polimer",
        "category_id": 15,
        "color_id": 10,
        "glass_id": 22,
        "accessory_group_id": 8,
        "trademark_id": 4,
        "price": 7966,
        "price_dealer": 5690,
        "discount": 0,
        "discount_dealer": 0,
        "label": null,
        "vendor_code": "011-0099",
        "position": 62,
        "pictures": [
          {
            "small": "https://dveri.com/storage/products/small/m-m16-t-08-venge-po-st-polimer.jpg",
            "medium": "https://dveri.com/storage/products/medium/m-m16-t-08-venge-po-st-polimer.jpg",
            "large": "https://dveri.com/storage/products/large/m-m16-t-08-venge-po-st-polimer.jpg"
          }
        ],
        "options": [
          {
            "id": 246,
            "price": 7966,
            "price_dealer": 5690,
            "discount": 0,
            "discount_dealer": 0,
            "vendor_code": "011-0099",
            "title": "200*60",
            "label": null,
            "properties": []
          },
          {
            "id": 247,
            "price": 7966,
            "price_dealer": 5690,
            "discount": 0,
            "discount_dealer": 0,
            "vendor_code": "011-0100",
            "title": "200*70",
            "label": null,
            "properties": []
          },
          {
            "id": 248,
            "price": 7966,
            "price_dealer": 5690,
            "discount": 0,
            "discount_dealer": 0,
            "vendor_code": "011-0101",
            "title": "200*80",
            "label": null,
            "properties": []
          },
          {
            "id": 249,
            "price": 7966,
            "price_dealer": 6090,
            "discount": 0,
            "discount_dealer": 0,
            "vendor_code": "011-0102",
            "title": "200*90",
            "label": null,
            "properties": []
          }
        ],
        "properties": [
          {
            "id": 123,
            "value_id": 3565
          },
          {
            "id": 112,
            "value_id": 634
          },
          {
            "id": 77,
            "value_id": 109
          },
          {
            "id": 3,
            "value_id": 217
          },
          {
            "id": 4,
            "value_id": 218
          },
          {
            "id": 6,
            "value_id": 141
          },
          {
            "id": 10,
            "value_id": 5
          },
          {
            "id": 59,
            "value_id": 27
          },
          {
            "id": 61,
            "value_id": 643
          }
        ]
      },
      {
        "id": 22,
        "title": "М7",
        "url": "https://dveri.com/catalog/dveri-mezhkomnatnyye/dveri-iz-massiva/m7-t-06-temnyi-lak",
        "category_id": 15,
        "color_id": 11,
        "glass_id": null,
        "accessory_group_id": 7,
        "trademark_id": 4,
        "price": 5166,
        "price_dealer": 3690,
        "discount": 0,
        "discount_dealer": 0,
        "label": null,
        "vendor_code": "011-0111",
        "position": 52,
        "pictures": [
          {
            "small": "https://dveri.com/storage/products/small/dver-m-7-t-06-temnyj-lak-pg.jpg",
            "medium": "https://dveri.com/storage/products/medium/dver-m-7-t-06-temnyj-lak-pg.jpg",
            "large": "https://dveri.com/storage/products/large/dver-m-7-t-06-temnyj-lak-pg.jpg"
          }
        ],
        "options": [
          {
            "id": 254,
            "price": 5166,
            "price_dealer": 3690,
            "discount": 0,
            "discount_dealer": 0,
            "vendor_code": "011-0111",
            "title": "200*60",
            "label": null,
            "properties": []
          },
          {
            "id": 255,
            "price": 5166,
            "price_dealer": 3690,
            "discount": 0,
            "discount_dealer": 0,
            "vendor_code": "011-0112",
            "title": "200*70",
            "label": null,
            "properties": []
          },
          {
            "id": 256,
            "price": 5166,
            "price_dealer": 3690,
            "discount": 0,
            "discount_dealer": 0,
            "vendor_code": "011-0113",
            "title": "200*80",
            "label": null,
            "properties": []
          },
          {
            "id": 257,
            "price": 5166,
            "price_dealer": 4090,
            "discount": 0,
            "discount_dealer": 0,
            "vendor_code": "011-0114",
            "title": "200*90",
            "label": null,
            "properties": []
          }
        ],
        "properties": [
          {
            "id": 123,
            "value_id": 3565
          },
          {
            "id": 112,
            "value_id": 633
          },
          {
            "id": 77,
            "value_id": 109
          },
          {
            "id": 3,
            "value_id": 217
          },
          {
            "id": 4,
            "value_id": 218
          },
          {
            "id": 10,
            "value_id": 5
          },
          {
            "id": 59,
            "value_id": 1407
          },
          {
            "id": 61,
            "value_id": 643
          }
        ]
      }
];
*/