import React from 'react';
import './style.scss';
import { CheckBox } from '../ChiliForm';
//fow OWL.Carousel
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import $ from 'jquery';

class MyAddress extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    //fow OWL.Carousel
    $(document).ready(function () {
      $('#demo').owlCarousel({
        rtl: true,
        loop: false,
        margin: 15,
        nav: false,
        dots: false,
        autoWidth: true,
        responsive: {
          0: {
            items: 3,
          },
          768: {
            items: 3,
          },
          992: {
            items: 4,
          },
          1200: {
            items: 5,
          },
          1440: {
            items: 6,
          },
        },
      });
    });
  }

  render() {
    const {data} = this.props;
    const ChiliOwlDemoItems = data.addresses.map((item, i) =>
      <div
        key={i}
        className="item"
      >
        <div className="MyAddress">
          <div className="MyAddress-radio">
            <input
              type="radio"
              className="radio-input"
              name="signUpGender"
              // checked={signUpGender === 'male'}
              // onChange={this.onChange}
              // onKeyPress={this.handleKeyPressUpdate}
              value="male"
            />
          </div>
          <div className="MyAddress__details">
            <div className="MyAddress__details-action">
              <a href="#!">
                <span className="chilivery-edit"> </span>
              </a>
              <a href="#!">
                <span className="chilivery-delete"> </span>
              </a>
              <label className="pull-right">{item.name}</label>
            </div>
            <div className="clearfix"></div>
            <div className="MyAddress__details-address">
              <span>{item.complete}</span>
            </div>
          </div>
        </div>
      </div>
    );
    return (
        <div className="ltr-plugin">
          <div id="demo" className="owl-carousel owl-theme zIndex0">
            <div className="AddAddress">
              <span className="chilivery-add"> </span>
              <p>‌آدرس جدید</p>
            </div>
            {ChiliOwlDemoItems}
          </div>
        </div>
    );
  }
}

MyAddress.propTypes = {};

export default MyAddress;
