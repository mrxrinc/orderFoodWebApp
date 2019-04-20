import React from 'react';
import './style.scss';
import Food from '../../images/test/food.jpg';
import IncrementDecrease from '../IncrementDecrease';

/* eslint-disable react/prefer-stateless-function */
const divStyle = {
  backgroundImage: `url(${Food})`,
};

class CheckoutCardItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      newData:[]
    }
  }

  componentDidMount() {
    let newData = this.props.data.map((item) => {
      if(item.options.length) {
        let newOption = [];
        item.options.map((option) => {
          newOption.push(option.foodOptionPrice);
        });
        let sum = newOption.reduce((acc, currValue) => {
          console.log(acc)
          return acc + currValue;
        }, 0);
        return { ...item, optionSum: sum }
      } else {
        return item;
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
          <h2>{item.foodName}</h2>
          {item.options.map((option) =>
            <ul>
              <li>{option.foodOptionName} ({option.foodOptionPrice > 0 ? option.foodOptionPrice  : 'رایگان'})</li>
            </ul>
          )}


            <span className="number">
              {item.count > 1 &&
                <span>
                  {item.count } × {item.optionSum ? item.foodPrice + item.optionSum : item.foodPrice}
                </span>
              }
            </span>

          <span className="price">{item.optionSum ? item.count * (item.foodPrice + item.optionSum) : item.count * item.foodPrice } تومان</span>
          <div className="counter">
            <IncrementDecrease />
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
