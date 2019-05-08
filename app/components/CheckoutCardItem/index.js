import React from 'react';
import './style.scss';
import Food from '../../images/test/food.jpg';
import IncrementDecrease from '../IncrementDecrease';
import Stepper from '../../components/Stepper';

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

    const {items} =this.props;

    let newData = Object.keys(items).map((id) => {
      if(items[id].options.length) {
        let newOption = [];
        items[id].options.map((option) => {
          newOption.push(option.foodOptionPrice);
        });
        let sum = newOption.reduce((acc, currValue) => {
          console.log(acc)
          return acc + currValue;
        }, 0);
        return { ...items[id], optionSum: sum }
      } else {
        return items[id];
      }
    });
    this.setState({
      newData
    },()=>{
      console.log(this.state.newData)
    })
  }

  render() {
    const  {data} = this.props;
    const {newData} = this.state;
    const item = newData && newData.map((item, index) =>
      <div className="checkout-carditem">
        <div className="checkout-carditem__rbox" style={{ backgroundImage: `url(${item.image})`}}>
          {/*<img src={Food} alt="" />*/}
        </div>
        <div className="checkout-carditem__lbox">
          <h2>{item.name}</h2>
          {item.options.map((option) =>
            <ul>
              <li>{option.foodOptionName} ({option.foodOptionPrice > 0 ? option.foodOptionPrice  : 'رایگان'})</li>
            </ul>
          )}


            <span className="number">
              {item.itemCount > 1 &&
                <span>
                  {item.itemCount } × {item.optionSum ? item.foodPrice + item.optionSum : item.foodPrice}
                </span>
              }
            </span>

          <span className="price">{item.optionSum ? item.itemCount * (item.foodPrice + item.optionSum) : item.itemCount * item.foodPrice } تومان</span>
          <div className="counter">
            {/*<IncrementDecrease />*/}
          </div>
        </div>
      </div>
    );
    return (
      <div>
        {item}
      </div>
    );
  }
}

CheckoutCardItem.propTypes = {};

export default CheckoutCardItem;
