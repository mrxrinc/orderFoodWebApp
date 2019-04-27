import React from 'react';
import './style.scss';
//fow OWL.Carousel
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import $ from 'jquery';
import { addressIdChanged } from '../../actions/Basket';
import { connect } from 'react-redux';

class MyAddress extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      addressId: this.props.basket.addressId ? this.props.basket.addressId : '',
      addresses:this.props.data.addresses || [],
      organizationAddress:this.props.data.userOrganizationAddress || [],
      fullAddress:[],
      
    };
  }


  handleOptionChange = e => {
    this.setState({
        addressId: e.target.value,
      }, ()=>
        this.props.changeAddressId({addressId:this.state.addressId})
    );
  }


  componentDidMount(){
    let fullAddress = this.state.organizationAddress.concat(this.state.addresses);
    this.setState({
      fullAddress
    },()=>{
      console.log('=============data================');
      console.log(this.state.fullAddress);
      console.log('====================================');
    })
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
    const ChiliOwlDemoItems = this.state.fullAddress.map((item, i) =>
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
              checked={this.state.addressId == item.id}
              onChange={this.handleOptionChange}
              // onKeyPress={this.handleKeyPressUpdate}
              value={item.id}
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
              <span>{item.organAddressComplete?item.organAddressComplete:item.complete}</span>
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
            {this.state.fullAddress.length > 0 &&
              ChiliOwlDemoItems
              }
          </div>
        </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    changeAddressId: value => {
      dispatch(addressIdChanged(value));
    },
  };
};

const mapStateToProps = state => ({
  user: state.auth,
  basket:state.Basket
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyAddress);
