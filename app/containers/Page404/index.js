import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../images/icons/search_no_result.png';
const Page404 = () => (
  <div className="order-empty hFull center">
    <div className="order">
      <div className="order-empty__icon bottomP15">
        <img className="order-empty__img" src={icon} alt=""/>
        <span className="order-empty__title">این صفحه وجود ندارد</span>
      </div>
      <Link to="/" className="btn btn-danger">
        بازگشت به صفحه اصلی
      </Link>
    </div>
  </div>

);

export default Page404;
