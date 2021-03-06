/**
 *
 * ChiliStepper
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { addToBasket, changeSideDishBasket } from '../../actions/Basket';


import './style.scss';

/* eslint-disable react/prefer-stateless-function */
class SidedishStepper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemCount:0,
      selectionKey:null,
    };
  }

  componentDidMount() {
    let food = this.props.data;
    const foodId = food.key;
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

  modalPrice = modalData => {
    let sum = 0;
    if (modalData) {
      const { itemCount } = modalData;
      const itemPrice = this.props.data.price;
      sum = itemPrice * itemCount;
    }
    return sum;
  };

  increase = () => {
    this.props.changeSideDishBasket({
      sideDishrestaurantId: this.props.restaurantId,
      sideDishfood: this.props.data,
      sideDishItemCount: 1
    });
  }

  decrease = (food_basket) => {
      this.props.changeSideDishBasket({
        sideDishrestaurantId: this.props.restaurantId,
        sideDishfood: this.props.data,
        sideDishItemCount: -1
      });
    
  };

  render() {        
    const food_basket = (
      this.props.data &&
      typeof this.props.basket.items !== "undefined" &&
      this.props.basket.items[this.props.data.key]) ? 
      this.props.basket.items[this.props.data.key]:{itemCount: 0};
    return (
      <div>
        <React.Fragment>
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
                  onClick={() => this.decrease(food_basket)}
                >
                  <span className="chilivery-remove" />
                </button>
              </React.Fragment>
            )}
          </div>
        </React.Fragment>

        {this.props.type === "modal" ?
          <div className="flex hCenter bold primary topM5">
            <span className="text12 leftM5">???????? ???? :</span>
              <span className="text22">{this.modalPrice(food_basket)}</span>
            <span className="text12 topM5 rightM3">??????????</span>
          </div>:null
        }
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
  changeSideDishBasket: value => {
    dispatch(changeSideDishBasket(value));
  }  
});

export default connect(mapStateToProps, mapDispatchToProps)(SidedishStepper);
