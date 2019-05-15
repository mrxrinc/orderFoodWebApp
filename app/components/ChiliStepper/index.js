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

  modalPrice = (modalData) => {
    let sum = 0;
    if (modalData) {
      const { itemCount } = modalData;
      const itemPrice = this.props.data.price;
      sum = itemPrice * itemCount;
    }
    return sum;
  };

  increase = () => {
    this.props.changeBasket({
      restaurantId: this.props.restaurantId,
      food: this.props.data,
      itemCount: 1
    });
    console.log('====================================');
    console.log(this.props);
    console.log('====================================');
  }

  decrease = (food_basket) => {
    if(this.props.type === "modal" && food_basket.itemCount > 1){
      this.props.changeBasket({
        restaurantId: this.props.restaurantId,
        food: this.props.data,
        itemCount: -1
      });
    }
    if(this.props.type == null || this.props.type !== "modal"){
      this.props.changeBasket({
        restaurantId: this.props.restaurantId,
        food: this.props.data,
        itemCount: -1
      });
    }
  }

  render() {
    const food_basket = (
      this.props.data &&
      typeof this.props.basket.items !== "undefined" &&
      this.props.basket.items[this.props.data.id]) ? 
      this.props.basket.items[this.props.data.id]:{itemCount: 0};
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
            <span className="text12 leftM5">مبلغ کل :</span>
              <span className="text22">{this.modalPrice(food_basket)}</span>
            <span className="text12 topM5 rightM3">تومان</span>
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
  changeBasket: value => {
    dispatch(changeBasket(value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ChiliStepper);
