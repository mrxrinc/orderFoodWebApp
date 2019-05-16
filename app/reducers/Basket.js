import {
  ACC_CHARGED_CHANGED,
  GETWAY_CHANGED,
  ADD_TO_BASKET,
  ADDRESS_ID_CHANGED,
  DELIVERY_TYPE_CHANGED,
  CAMPAGIN_CODE_CHANGED,
  CHANGE_BASKET,
  CHANGE_GENERATED_FOOD_ID,
  CHANGE_SIDEDISH_BASKET
} from '../constants/Basket';
const initState = {
  items: {},
};
const Basket = (state = initState, action) => {
  let items = JSON.parse(JSON.stringify(state.items));
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
      const { foodData, optionGroup, restaurant } = action.payload;
      // let items = JSON.parse(JSON.stringify(state.items))
      const itemData = JSON.parse(JSON.stringify(state.items));
      if (state.restaurantId != restaurant) {
        items = {};
      }
      if (typeof items[foodData.id] !== 'undefined') {
        const tempCount = itemData[foodData.id].itemCount;
        items[action.payload.foodGeneratedId] = {
          orderItemFoodId: foodData.id,
          foodLastPrice: null,
          foodName: foodData.name,
          basketOrderItemKey: foodData.id,
          itemCount: tempCount,
          foodPrice: foodData.price,
          image: foodData.image,
          options: optionGroup,
        };
      }
      delete items[foodData.id];
      return Object.assign({}, state, { items, restaurant });

    case CHANGE_BASKET:
      const { food, itemCount, restaurantId } = action.payload;
      // let items = JSON.parse(JSON.stringify(state.items));
      if (state.restaurantId != restaurantId) {
        items = {};
      }
      if (typeof items[food.id] !== 'undefined') {
        items[food.id].itemCount += itemCount;
      } else {
        items[food.id] = {
          orderItemFoodId: food.id,
          foodLastPrice: null,
          foodName: food.name,
          basketOrderItemKey: food.id,
          itemCount: 1,
          foodPrice: food.price,
          image: food.image,
          options: food.options,
        };
      }
      if (items[food.id].itemCount == 0) {
        delete items[food.id];
      }
      return Object.assign({}, state, { items, restaurantId });

    case CHANGE_SIDEDISH_BASKET:
    debugger;
      const { sideDishfood, sideDishItemCount, sideDishrestaurantId } = action.payload;      
      if (state.restaurantId != sideDishrestaurantId) {
        items = {};
      }
      if (typeof items[sideDishfood.key] !== 'undefined') {
        items[sideDishfood.key].itemCount += sideDishItemCount;
      } else {
        items[sideDishfood.key] = {
          orderItemFoodId: sideDishfood.key,
          foodLastPrice: null,
          foodName: food.name,
          basketOrderItemKey: sideDishfood.key,
          itemCount: 1,
          foodPrice: sideDishfood.price,
          image: sideDishfood.image,
          options: sideDishfood.options,
        };
      }
      if (items[sideDishfood.key].itemCount == 0) {
        delete items[sideDishfood.key];
      }
      return Object.assign({}, state, { items, sideDishrestaurantId });

    default:
      return state;
  }
};

export default Basket;
