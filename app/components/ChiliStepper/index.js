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
    let food = this.props.data;
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

  render() {
    const food_basket = (
      this.props.data &&
      typeof this.props.basket.items !== "undefined" &&
      this.props.basket.items[this.props.data.id]) ? 
      this.props.basket.items[this.props.data.id]:{itemCount: 0};
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
