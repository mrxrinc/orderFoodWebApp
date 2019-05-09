import {
  ACC_CHARGED_CHANGED,
  GETWAY_CHANGED,
  ADD_TO_BASKET,
  ADDRESS_ID_CHANGED,
  DELIVERY_TYPE_CHANGED,
  CAMPAGIN_CODE_CHANGED,
  CHANGE_BASKET
} from '../constants/Basket';
const initState = {
  chili_basket: {
    restaurantId: '',
    items: {}
  }
}
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
        case CHANGE_BASKET:
          let {restaurantId, food, itemCount} = action.payload;
          let items = JSON.parse(JSON.stringify(state.items));
          if( state.restaurantId != restaurantId){
            items = {};
          }
          if(items[food.id]){
            items[food.id].itemCount += itemCount;
          }else{
            items[food.id] = {
              orderItemFoodId : food.id,
              foodLastPrice : null,
              foodName : food.item.name, 
              basketOrderItemKey : food.item.id,
              itemCount : itemCount,
              foodPrice: food.item.price,
              image: food.item.image,
              options: [],
            };
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
