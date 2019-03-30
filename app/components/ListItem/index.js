import React from 'react';
import './style.scss';

const ListItem = () => (
  <div className="listItem">
    <div className="head center">
      <div className="right center">
        <div className="imageBox bg" />
      </div>
      <div className="left padd5 d">
        <h2 className="font bold largeText primary">باگت جردن</h2>
        <ul className="flex debug">
          <li className="text12">ایتالیایی</li>
          <li className="text12">ایتالیایی</li>
          <li className="text12">ایتالیایی</li>
        </ul>
        <div className="flex economy">
          <span className="chilivery-economic_level3 black f"></span>
        </div>
      </div>
    </div>
  </div>
);

export default ListItem;
