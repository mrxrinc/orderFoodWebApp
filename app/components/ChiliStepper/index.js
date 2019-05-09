/**
 *
 * ChiliStepper
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { addToBasket, changeBasket } from '../../actions/Basket';


import './style.scss';

/* eslint-disable react/prefer-stateless-function */
class ChiliStepper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemCount:0,
      selectionKey:null,
    };
  }

  componentDidMount() {
    console.log('===========this.props.data=============');
    console.log(this.props.data1);
    console.log('====================================');
    const food = this.props.data;
    const foodId = food.id;
    let basketToArray = [];
    const basketFromStore = this.props.basket;

    if(typeof basketFromStore.items !== "undefined"){
      basketToArray = Object.keys(basketFromStore.items);
      basketToArray.forEach(item => {
        if(foodId == item){
          this.setState({
            itemCount:basketFromStore.items[item].itemCount,
            selectionKey:item
          })
        }
      });
    }
  }

  increase = () => {
    this.props.changeBasket({
      restaurantId: this.props.restaurantId,
      food: this.props.data,
      itemCount: 1
    });
  }

  decrease = () => {
    this.props.changeBasket({
      restaurantId: this.props.restaurantId,
      food: this.props.data,
      itemCount: -1
    });
  }

  // increase = () => {
    // this.setState({itemCount:this.state.itemCount + 1},()=>{
    //   if(Object.keys(this.props.basket.items).length > 0){
    //     console.log('====================================');
    //     console.log('start true');
    //     console.log('====================================');

    //     if(this.props.basket.items.hasOwnProperty(this.state.selectionKey)){
    //       let basketFromStore = this.props.basket.items[this.state.selectionKey]
    //       basketFromStore['itemCount'] = this.state.itemCount;
    //       this.props.addToBasket(this.props.basket);

    //     }else{
    //       console.log('====================================');
    //       console.log('zereshllllll');
    //       console.log('====================================');
    //     }
    //   }else{
        
    //     let newBasket = this.props.basket;
    //     const food = this.props.data.item;
    //       const newBasketItem = {
    //        [food.id]:{
    //         "image": food.image,
    //         "options": food.options,
    //         "orderItemFoodId": food.id,
    //         "itemCount": 1,
    //         "foodPrice": food.price,
    //         "foodName": food.name,
    //         "foodLastPrice": null,
    //         "basketOrderItemKey": food.id
    //       }
    //     }
    //     newBasket['items'] = newBasketItem;
    //     this.props.addToBasket(newBasket);
    //   }
    // })
  // };
  
  // decrease = () => {
  //   if(this.state.itemCount > 0){
  //     this.setState({itemCount:this.state.itemCount - 1},()=>{
  //       let basketFromStore = this.props.basket.items[this.state.selectionKey]
  //       basketFromStore['itemCount'] = this.state.itemCount;
  //       this.props.addToBasket(this.props.basket);
  //     })
  //   }else{
  //     console.log('====================================');
  //     console.log('zereshkkkkkkkkkkkk');
  //     console.log('====================================');
  //   }
  // };

  render() {
    const food_basket = (this.props.data && this.props.basket && this.props.basket.items[this.props.data.id])?this.props.basket.items[this.props.data.id]:{itemCount: 0};
    return (
      <div
      className={`stepper hCenter rRowReverse spaceBetween ${
        this.props.className
      }`}
    >
      <button
        className="stepper__add center"
        type="button"
        onClick={() => this.increase()}
      >
        <span className="chilivery-add" />
      </button>
  
      {food_basket.itemCount > 0 && (
        <React.Fragment>
          <span className="stepper__count">
            <h2
              className="reset centerText hM5"
              style={{ fontSize: `${this.props.fontSize}px` }}
            >
              {food_basket.itemCount}
            </h2>
          </span>
  
          <button
            className="stepper__remove center"
            type="button"
            onClick={() => this.decrease()}
          >
            <span className="chilivery-remove" />
          </button>
        </React.Fragment>
      )}
    </div>
    );
  }
}



const mapStateToProps = state => ({
  basket:state.Basket,
  Auth:state.auth
});
const mapDispatchToProps = dispatch => ({
  addToBasket: value => {
    dispatch(addToBasket(value));
  },
  changeBasket: value => {
    dispatch(changeBasket(value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ChiliStepper);
