import React from 'react';
import './style.scss';

const ListItem = () => (
  <div className="listItem">
    <div className="head center">
      <div className="right center">
        <div className="imageBox bg" />
      </div>
      <div className="left padd5 ">
        <h2 className="font bold largeText">باگت جردن</h2>
        <div>
          <ul className="">
            <li className="text12 wFull reset f">ایتالیایی</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default ListItem;
