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
          let totalCount = JSON.parse(JSON.stringify(state.totalCount));
          console.log('=======totalCount==================');
          console.log(totalCount);
          console.log('====================================');
          if( state.restaurantId != restaurantId){
            items = {};
          }
          if(typeof items[food.id] != "undefined"){
            items[food.id].itemCount += itemCount;
            console.log('====================================');
            console.log("+= itemCount");
            console.log('====================================');
          }else{
            console.log('====================================');
            console.log(food);
            console.log('====================================');
            items[food.id] = {
              orderItemFoodId : food.id,
              foodLastPrice : null,
              foodName : food.name, 
              basketOrderItemKey : food.id,
              itemCount : 1,
              foodPrice: food.price,
              image: food.image,
              options: [],
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
