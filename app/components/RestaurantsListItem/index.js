import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';
const data = {
  commentCount: 585,
  deliveryBy: 1,
  deliveryIcon: 'https://chilivery.net/app/image/restaurant_delivery.png',
  deliveryName: 'پیک رستوران',
  deliveryPrice: 8000,
  financialLevel: {
    id: 34,
    name: ' متوسط',
    parentId: 10,
    foreignKey: 1627,
    financeLevel: 2,
  },
  foodTypes: [
    {id: 696, name: "پیش غذا", iconSlug: "salad", parentId: 2, foreignKey: 1627},
    {id: 697, name: "نوشیدنی", iconSlug: "juice", parentId: 2, foreignKey: 1627},
    {id: 730, name: "دسر", iconSlug: "milkshake", parentId: 2, foreignKey: 1627},
    {id: 698, name: "سالاد", iconSlug: "salad", parentId: 2, foreignKey: 1627},
    {id: 722, name: "افزودنی های انتخابی", iconSlug: "add", parentId: 2, foreignKey: 1627},
    {id: 749, name: "نوشیدنی سرد", iconSlug: "juice", parentId: 2, foreignKey: 1627},
  ],
  id: 1627,
  isNew: 0,
  isOpen: true,
  isRecommended: 0,
  name: "فرش باکس",
  neighborhood: {
    citySlug: "tehran", 
    cityName: "تهران", 
    name: "درب-دوم", 
    id: 280, 
    cityId: 2, 
    slug: "darb-dovom",
    status: 1
  },
  nextActivationTime: {time: 22, unit: "h"},
  point: "35.783050862408665,51.43747463822365",
  profile: "https://media.chilivery.net/img/restaurantLogo/988ae6af6f4067543abd5d2d2667ae26/restaurantProfile-فرشباکس-49100.png",
  rateAverage: 4.2,
  restaurantType: [{
    foreignKey: 1627,
    id: 756,
    name: "سالاد بار",
    parentId: 4
  }],
  salePercentage: 0,
  slug: "freshbox",
};

const RestaurantsListItem = props => (
  <Link to="/restaurant-page" className="listItem dblock">
    <div className="head center">
      <div className="right center relative">
        <div
          className="imageBox centerBg contain"
          style={{ backgroundImage: `url(${props.logo})` }}
        />
        <span className="discount flex center absolute top left bgRed white centerText">
          <span className="text14">30</span>
          <span className="text12 topM3 leftM3">%</span>
        </span>
      </div>
      <div className="left relative">
        <h2 className="font bold largeText primary">{props.data.name}</h2>

        <ul className="flex">
          <li className="text12">ایتالیایی</li>
          <li className="text12">ایتالیایی</li>
          <li className="text10">ایتالیایی</li>
        </ul>

        <div className="flex economy spaceBetween">
          <div className="flex hCenter">
            <span className="chilivery-economic_level3 primary flex hCenter" />
            <span className="chilivery-restaurant-vegeterian tag" />
          </div>

          <div className="suggested flex center">
            <span className="white text12 centerText hP10">پیشنهادی</span>
          </div>
        </div>

        <div className="absolute top left center favorite">
          <span className="chilivery-fav-full black red" />
        </div>
      </div>
    </div>

    <div className="addressRate flex rRow wFull">
      <div className="wFull flex hCenter rightP10 gray overhide">
        <span className="chilivery-location text18" />
        <span className="text12 rightM5">سهروردی شمالی - پالیزی</span>
      </div>
      <div className="reviews flex leftM10 vM3">
        <div className="flex i2 center gray">
          <span className="text16 leftM3 topM5">87</span>
          <span className="chilivery-user text14" />
        </div>

        <div className="flex i2 center tagBg round5">
          <span className="white text16 leftM3 topM5">4/7</span>
          <span className="chilivery-smiley-good2 white text14" />
        </div>
      </div>
    </div>

    <div className="fullLine vM5" />

    <div className="delivery flex rRow primary">
      <div className="moto flex hCenter rightP10 overhide">
        <span className="chilivery-motochili text25" />
        <span className="text14 bold rightM10">{props.data.deliveryName}</span>
      </div>
      <div className="flex price hP10 leftContent primary text16 wFull hCenter">
        <span className="leftM5">{props.data.deliveryPrice}</span>
        <span>تومان</span>
      </div>
    </div>
  </Link>
);

export default RestaurantsListItem;
