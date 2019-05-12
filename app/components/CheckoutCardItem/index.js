import React from 'react';
import './style.scss';
import Food from '../../images/test/food.jpg';
import IncrementDecrease from '../IncrementDecrease';
import Stepper from '../../components/ChiliStepper';
import { addressIdChanged, addToBasket, deliveryTypeChanged, getBasketItems } from '../../actions/Basket';
import { connect } from 'react-redux';
import { cart } from '../../containers/Cart';

/* eslint-disable react/prefer-stateless-function */
const divStyle = {
  backgroundImage: `url(${Food})`,
};
const basketTempData = {};
class CheckoutCardItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      newData:[]
    }
  }

  componentDidMount() {

    const {basket} =this.props;

    let newData = Object.keys(basket.items).map((id) => {
      if(basket.items[id].options.length) {
        let newOption = [];
        basket.items[id].options.map((option) => {
          newOption.push(option.foodOptionPrice);
        });
        let sum = newOption.reduce((acc, currValue) => {
          console.log(acc)
          return acc + currValue;
        }, 0);
        return { ...basket.items[id], optionSum: sum }
      } else {
        return basket.items[id];
      }
    });
    this.setState({
      newData
    },()=>{
      console.log(this.state.newData)
    })
  }

  render() {
    const  {data,basket} = this.props;
    const {newData} = this.state;



    const item = newData && newData.map((food, index) => {
        const _data = {
          restaurantId: basket.restaurantId,
          id: food.orderItemFoodId,
          name: food.foodName,
          hasPic: food.hasPic,
          hasOption: food.hasOption,
          foodImg: food.image,
          description: food.description,
          discount: food.salePercentage,
          vote: food.vote,
          voteCount: food.voteCount,
          price: food.foodPrice,
          lastPrice: food.lastPrice,
          item: food
        }
        return(
          <div className="checkout-carditem">
        <div className="checkout-carditem__rbox" style={{ backgroundImage: `url(${food.image})`}}>
          {/*<img src={Food} alt="" />*/}
        </div>
        <div className="checkout-carditem__lbox">
          <h2>{food.foodName}</h2>
          {food.options.map((option) =>
            <ul>
              <li>{option.foodOptionName} ({option.foodOptionPrice > 0 ? option.foodOptionPrice  : 'رایگان'})</li>
            </ul>
          )}


            <span className="number">
              {basket.items[food.orderItemFoodId].itemCount > 1 &&
                <span>
                  {basket.items[food.orderItemFoodId].itemCount } × {basket.items[food.orderItemFoodId].optionSum ? basket.items[food.orderItemFoodId].foodPrice + basket.items[food.orderItemFoodId].optionSum : basket.items[food.orderItemFoodId].foodPrice}
                </span>
              }
            </span>

          <span className="price">{basket.items[food.orderItemFoodId].optionSum ? basket.items[food.orderItemFoodId].itemCount * (basket.items[food.orderItemFoodId].foodPrice + item.optionSum) : basket.items[food.orderItemFoodId].itemCount * basket.items[food.orderItemFoodId].foodPrice } تومان</span>
          <div className="counter">
            {/*<IncrementDecrease />*/}
            <Stepper
              fontSize="18"
              restaurantId = {basket.restaurantId}
              data={_data}
              cartPage
            />
          </div>
        </div>
      </div>
      )
    }
    );
    return (
      <div>
        {item}
      </div>
    );
  }
}




const mapStateToProps = state => ({
  basket:state.Basket
});

export default connect(
  mapStateToProps,
  null
)(CheckoutCardItem);
