import React from 'react';

import './style.scss';
// eslint-disable-next-line react/prefer-stateless-function
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div className="home whFull absolute">
        <div className="head wFull cover relative">
          <div className="wave absolute bottom wFull contain" />
          <div className="absolute bottom wFull center">
            <img src="../../images/logo-home.png" className="" alt="Logo" />
          </div>
        </div>
      </div>
    );
  }
}
