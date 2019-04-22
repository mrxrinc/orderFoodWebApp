import React from 'react';
import './style.scss';

export class RestaurantHeaderCheckout extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const  {data,cover,logo} = this.props;
    return (
      <div className="header wFull">
        <div
          className="cover gray4Bg relative"
          style={{ backgroundImage: `url(${cover})` }}
        >
          <div className="curvature absolute bottom gray2Bg" />
          <div className="wFull absolute bottom center">
            <div className="round7 avatar-box">
              <div
                className="avatar round7 gray5Bg relative centerBg contain"
                style={{ backgroundImage: `url(${data.profile})` }}
              >
                {/*<div className="discount flex center absolute bgRed white centerText">*/}
                  {/*<span className="text16">70</span>*/}
                  {/*<span className="text12 topM3 leftM3">%</span>*/}
                {/*</div>*/}
              </div>
            </div>
          </div>
        </div>

        <div className="details relative column hCenter wFull">
          <h2 className="text18 bold centerText primary">{data.name}</h2>
        </div>
      </div>
    )
  }
}

export default RestaurantHeaderCheckout;
