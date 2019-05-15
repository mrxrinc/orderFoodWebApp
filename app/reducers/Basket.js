import {
  ACC_CHARGED_CHANGED,
  GETWAY_CHANGED,
  ADD_TO_BASKET,
  ADDRESS_ID_CHANGED,
  DELIVERY_TYPE_CHANGED,
  CAMPAGIN_CODE_CHANGED,
  CHANGE_BASKET,
  CHANGE_GENERATED_FOOD_ID,
} from '../constants/Basket';
const initState = {
  items: {},
};
const Basket = (state = initState, action) => {
    switch (action.type) {
        case ACC_CHARGED_CHANGED:
            return Object.assign({}, state, action.payload);
        case GETWAY_CHANGED:
            return Object.assign({}, state, action.payload);
        case ADD_TO_BASKET:
            return Object.assign({}, state, action.payload);
        case ADDRESS_ID_CHANGED:
          return Object.assign({}, state, action.payload);
        case DELIVERY_TYPE_CHANGED:
          return Object.assign({}, state, action.payload);
        case CAMPAGIN_CODE_CHANGED:
          return Object.assign({}, state, action.payload);

        case CHANGE_GENERATED_FOOD_ID:
          const { restaurant, foodData, optionGroup } = action.payload;
          const itemData = JSON.parse(JSON.stringify(state.items));
          // debugger;
          if (state.restaurantId != restaurant) {
            items = {};
          }
          if (typeof itemData[foodData.id] !== 'undefined') {
            const tempCount = itemData[foodData.id].itemCount;
            delete itemData[foodData.id];
            itemData[action.payload.foodGeneratedId] = {
              orderItemFoodId: foodData.id,
              foodLastPrice: null,
              foodName: foodData.name,
              basketOrderItemKey: foodData.id,
              itemCount: tempCount,
              foodPrice: foodData.price,
              image: foodData.image,
              options: optionGroup,
            };
          } else if (typeof itemData[foodData.foodGeneratedId] !== 'undefined') {
            itemData[action.payload.foodGeneratedId] = {
              orderItemFoodId: foodData.id,
              foodLastPrice: null,
              foodName: foodData.name,
              basketOrderItemKey: foodData.id,
              itemCount: 2,
              foodPrice: foodData.price,
              image: foodData.image,
              options: optionGroup,
            };
          } else {
            itemData[action.payload.foodGeneratedId] = {
              orderItemFoodId: foodData.id,
              foodLastPrice: null,
              foodName: foodData.name,
              basketOrderItemKey: foodData.id,
              itemCount: 1,
              foodPrice: foodData.price,
              image: foodData.image,
              options: optionGroup,
            };
          }
          items = itemData;
          return Object.assign({}, state, { items, restaurant });

        case CHANGE_BASKET:
          let {restaurantId, food, itemCount} = action.payload;
          let items = JSON.parse(JSON.stringify(state.items));
          if( state.restaurantId != restaurantId){
            items = {};
          }
          if(typeof items[food.id] != "undefined"){
            items[food.id].itemCount += itemCount;

          }else{
            items[food.id] = {
              orderItemFoodId : food.id,
              foodLastPrice : null,
              foodName : food.name,
              basketOrderItemKey : food.id,
              itemCount : 1,
              foodPrice: !food.options ? food.item.price : food.price,
              image: food.image,
              options: !food.options ? food.item.options : food.options,
            };
            console.log('====================================');
            console.log(" itemCount == 1");
            console.log('====================================');
          }
          if(items[food.id].itemCount == 0){
            delete items[food.id];
          }
          return Object.assign({}, state, {items, restaurantId});
        default:
            return state;
    }
}

export default Basket;
