/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';
import { financialLevel, rateColor } from '../GeneralFunctions';

const RestaurantsListItem = props => (
  <Link to={`/restaurant-page/${props.id}`} className="listItem dblock">
    <div className="head center">
      <div className="right center relative">
        <div
          className="imageBox centerBg contain"
          style={{ backgroundImage: `url(${props.profile})` }}
        />
        {props.salePercentage > 0 && (
          <span className="discount flex center absolute top left bgRed white centerText">
            <span className="text14">{props.salePercentage}</span>
            <span className="text12 topM3 leftM3">%</span>
          </span>
        )}
      </div>
      <div className="left relative">
        <h2 className="font bold largeText primary text-truncate w80">{props.name}</h2>

        {props.foodTypes.length > 0 && (
          <ul className="flex">
            {props.foodTypes.map(
              (item, index) =>
                index < 3 && (
                  <li className="text12" key={item.id}>
                    {item.name}
                  </li>
                ),
            )}
          </ul>
        )}

        <div className="flex economy spaceBetween">
          <div className="flex hCenter">
            <div className="flex">
              <span
                className={`chilivery-economic_${financialLevel(
                  props.financialLevel.financeLevel
                )} primary flex hCenter zIndex1 text30`}
              />
              <span className="chilivery-economic_level3 gray5 absolute zIndex0 flex hCenter text30" />
            </div>

            {/* <div className="vegeterian flex center">
              <span className="chilivery-restaurant-vegeterian tag text22 rightM10" />
            </div> */}
          </div>

          {props.isRecommended !== 0 && (
            <div className="suggested flex center">
              <span className="white text12 centerText hP10">پیشنهادی</span>
            </div>
          )}
        </div>

        <div className="absolute top left center favorite">
          <span className="chilivery-fav-full black red" />
        </div>
      </div>
    </div>

    <div className="addressRate flex rRow wFull">
      <div className="wFull flex hCenter rightP10 gray overhide">
        <span className="chilivery-location text18" />
        <span className="text12 rightM5">{props.neighborhood.name}</span>
      </div>
      <div className="reviews flex leftM10 vM3">
        <div className="flex i2 center gray">
          <span className="text16 leftM3 topM5">{props.commentCount}</span>
          <span className="chilivery-user text14" />
        </div>

        <div
          className={`flex i2 center round5 ${rateColor(props.rateAverage)}`}
        >
          <span className="white text16 leftM3 topM5">{props.rateAverage}</span>
          <span className="chilivery-smiley-good2 white text14" />
        </div>
      </div>
    </div>

    <div className="fullLine vM5" />

    <div className="delivery flex rRow primary">
      <div className="moto flex hCenter rightP10 overhide">
        {/* <span className="chilivery-motochili text25" /> */}
        <span
          className="deliveryIcon contain"
          style={{ backgroundImage: `url(${props.deliveryIcon})` }}
        />
        <span className="text14 bold rightM10">{props.deliveryName}</span>
      </div>
      <div className="flex price hP10 leftContent primary text16 wFull hCenter">
        <span className="leftM5">{props.deliveryPrice}</span>
        <span>تومان</span>
      </div>
    </div>
  </Link>
);

export default RestaurantsListItem;
