import React from 'react';
import './style.scss';
import Food from '../../images/test/food.jpg';
import IncrementDecrease from '../IncrementDecrease';

/* eslint-disable react/prefer-stateless-function */
const divStyle = {
  backgroundImage: `url(${Food})`,
};

class AfterPaymentCardItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  itemReview = ()=> this.props.data && this.props.data.map((item, index) =>
    <div className="afterpayment-carditem" key={index}>
      {(item.food['image'] != undefined) ?
        <div className="afterpayment-carditem__rbox" style={{ backgroundImage: `url(${item.food.image})`}}></div>:
        null
      }
      <div className="afterpayment-carditem__lbox">
        <h2>{item.food.name}</h2>
          <ul>
            {item.food.options && item.food.options.map((option,index) =>
                <li>{option.name}</li>
            )}
          </ul>
        <span className="number">{item.count} × {item.price}</span>
        <span className="price">{item.count * item.price} تومان</span>
      </div>
    </div>
  );

  render() {
    const {data} = this.props;
    const  item= data && data.map((item, index) =>
      <div className="afterpayment-carditem" key={index}>
        <div className="afterpayment-carditem__rbox" style={{ backgroundImage: `url(${item.image})`}}>
        </div>
        <div className="afterpayment-carditem__lbox">
          <h2>{item.name}</h2>
            <ul>
              {item.options && item.options.map((option,index) =>
                  <li>{option.name}</li>
              )}
            </ul>
          <span className="number">{item.count} × {item.price}</span>
          <span className="price">{item.count * item.price} تومان</span>
        </div>
      </div>
    );


    return (
      <div>
        {this.props.type !== "orderReview" ?
          item:
          this.itemReview()
        }
      </div>
    );
  }
}

AfterPaymentCardItem.propTypes = {};

export default AfterPaymentCardItem;
