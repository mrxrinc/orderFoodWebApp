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
      console.log('@#@#@#', action.payload);
      const { restaurant, foodData, optionGroup } = action.payload;
      const itemData = JSON.parse(JSON.stringify(state.items));
      debugger;
      if (state.restaurantId != restaurant) {
        items = {};
      }
      if (typeof itemData[foodData.id] !== 'undefined') {
        const tempCount = itemData[foodData.id].itemCount;
        delete items[foodData.id];
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
      } else if (typeof itemData[foodData.foodGeneratedId] !== 'undefined') {
        items[action.payload.foodGeneratedId] = {
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
        items[action.payload.foodGeneratedId] = {
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
      return Object.assign({}, state, { items, restaurant });

    case CHANGE_BASKET:
      const { restaurantId, food, itemCount } = action.payload;
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
          options: [],
        };
      }
      if (items[food.id].itemCount == 0) {
        delete items[food.id];
      }
      return Object.assign({}, state, { items, restaurantId });
    default:
      return state;
  }
};

export default Basket;
