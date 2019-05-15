/* eslint-disable react/prop-types */
import React from 'react';
import './style.scss';
import StarsRating from '../StarsRating';

const deliveryTime = time => {
  if (Object.keys(time) &&
  Object.keys(time).length > 0 ) {
    const item = Object.values(time)[0];
    const equalTime = item.minTime === item.maxTime
    return (
      <React.Fragment>
        {equalTime ? (

          <span>{item.minTime} دقیقه</span>
        ) : (
          <React.Fragment>
           <span>{item.minTime}</span> تا <span>{item.maxTime}</span> <span>دقیقه</span>
          </React.Fragment>
        )}
      </React.Fragment>
    )
  }
}

const RestaurantHeader = props => (
  <div className="header wFull bgWhite">
    <div
      className="cover gray5Bg relative"
      style={{ backgroundImage: `url(${props.cover})` }}
    >
      <div className="curvature absolute bottom bgWhite" />
      <div className="wFull absolute bottom center">
        <div
          className="avatar round10 gray2Bg relative centerBg contain"
          style={{ backgroundImage: `url(${props.logo})` }}
        >
          {props.discount > 0 && (
            <div className="discount flex center absolute bgRed white centerText">
              <span className="text16">{props.discount}</span>
              <span className="text12 topM3 leftM3">%</span>
            </div>
          )}
        </div>
      </div>
    </div>

    <div
      className={`details relative column hCenter wFull 
      ${props.lightVersion && 'bottomP10'}`}
    >
      <h2 className="text18 bold centerText primary">{props.name}</h2>

      {!props.lightVersion && (
        <React.Fragment>
          <div className="rating round10 topM10 leftP3 flex center spaceAround">
            <StarsRating rate={props.rateAverage} size={25} />

            <div className="primary text16 topM2">{props.rateAverage}</div>

            <div className="flex center gray text10">
              (<span className="chilivery-user" />
              <span className="text14 rightM3 topM3">{props.commentCount}</span>
              )
            </div>
          </div>

          <div className="onOrder flex center vM10 primary">
            {props.isOpen ? (
              <React.Fragment>
                <span className="dot leftM5" />
                <span className="text14">در حال پذیرش سفارش</span>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <span className="dot dotRed leftM5 redBg" />
                <span className="text14 red">رستوران بسته است</span>
              </React.Fragment>
            )}
          </div>

          <div className="onOrder flex center vM5 primary">
            {/* <span className="chilivery-motochili leftM5 text22 gray8" /> */}
            <span
              className="deliveryIcon contain leftM5"
              style={{ backgroundImage: `url(${props.deliveryIcon})` }}
            />
            <span className="text12">
              <span className="leftM5">{props.deliveryName}</span>
              {deliveryTime(props.deliveryTime)}
            </span>
          </div>

          <ul className="tabs reset flex overhide text14 primary">
            <li className={`center ${props.activeTab === 'tabOne'?'gray6Bg white':''}`} onClick={() => props.tabClick("tabOne")}>
              <span>منوی رستوران</span>
            </li>
            <li className={`center ${props.activeTab === 'tabTwo'?'gray6Bg white':''}`} onClick={() => props.tabClick("tabTwo")}>
              <span>نظر مشتریان</span>
            </li>
            <li className={`center ${props.activeTab === 'tabThree'?'gray6Bg white':''}`} onClick={() => props.tabClick("tabThree")}>
              <span>اطلاعات رستوران</span>
            </li>
          </ul>
        </React.Fragment>
      )}
    </div>
  </div>
);

export default RestaurantHeader;
