/* eslint-disable react/prop-types */
import React from 'react';
import './style.scss';
import Stepper from '../../components/ChiliStepper';
import { rateColor } from '../GeneralFunctions';
import RestaurantSelectSideDish from '../RestaurantSelectSideDish';

class RestaurantFoodCard extends React.Component {  
  render(){    
    const props = this.props;    
    return (
      <div className="foodCard">
          <div className="head center" onClick={props.onClick}>
            <div className="rightHand center relative">
              <div
                className="imageBox cover gray4Bg"
                style={{ backgroundImage: `url(${props.foodImg})` }}
              />

              {props.discount && (
                <span className="discount flex center absolute bgRed white centerText">
                  <span className="text14">{props.discount}</span>
                  <span className="text12 topM3 leftM3">%</span>
                </span>
              )}

              <span className="zoom flex center absolute white">
                <span className="chilivery-zoom text18" />
              </span>
            </div>
            <div className="leftHand relative">

              <h2 className="foodCard__item-name font bold largeText primary bottomM10 text-truncate">{props.name}</h2>

              <p className="description gray5 overhide bottomM5">
                {props.description}
              </p>

              <div className="reviews flex topM3">
                <div className="flex i2 center gray">
                  <span className="text14 leftM3 topM3">{props.voteCount}</span>
                  <span className="chilivery-user text12" />
                </div>

                <div className={`flex i2 center round5 ${rateColor(props.vote)}`}>
                  <span className="white text14 leftM3 topM3">{props.vote}</span>
                  <span className="chilivery-smiley-good2 white text12" />
                </div>
              </div>

              {/* <div className="absolute top left center favorite">
                <span className="chilivery-fav-full black red" />
              </div> */}
            </div>
          </div>

          <div className="footer flex primary">
            <ul className="flex reset hInherit">
              {props.lastPrice && (
                <li className="moto flex hCenter rightP10 overLine danger">
                  <span className="text12">{props.lastPrice}</span>
                  <span className="text8 topM3 rightM3">??????????</span>
                </li>
              )}
              <li className="moto flex hCenter rightP10 bold primary">
                <span className="text16">{props.item.price}</span>
                <span className="text10 topM3 rightM3">??????????</span>
              </li>
            </ul>                        
            {props.foodIsOpen && props.restaurantIsOpen ? (
            <div className="flex price hP10 leftContent primary text16 wFull hCenter">
              {!props.hasOption && (
                <Stepper
                  fontSize="18"
                  restaurantId = {this.props.restaurantId}
                  data={props.item}
                />
              )}
              {props.hasOption && (
                <RestaurantSelectSideDish onClick={props.onClick} />
              )}
              </div>
              )
              : (
                <div className="flex price hP10 leftContent primary text16 wFull hCenter">
                  {props.restaurantIsOpen && <span className="text14 bold leftM10">???????? ????</span> }
                </div>
              )}
            </div>
          </div>
    )
  }

}
export default RestaurantFoodCard;