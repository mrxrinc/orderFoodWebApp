import React from 'react';
import { Link } from 'react-router-dom';
const Page404 = () => (
  <div className="page-component-order-failed page-404">
    <div className="card_white page-component-order-failed-card">
      <div className="of-title">404</div>
      <div>
        <div className="of-global-message">صفحه مورد نظر یافت نشد!</div>
      </div>

      <div>
        <Link to="/" className="btn btn-danger">
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  </div>
);

export default Page404;
