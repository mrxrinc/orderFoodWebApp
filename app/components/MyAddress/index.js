import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
//fow OWL.Carousel
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import $ from 'jquery';
import { addressIdChanged } from '../../actions/Basket';
import { userDeleteAddressPost } from '../../api/application/userAddress';
import AlertDeleteAddress from '../../components/ChiliModal/components/AlertDeleteAddress';
import { connect } from 'react-redux';
import { showModal } from '../../actions/Modals';
import {addToast} from '../../actions/Notifications';

class MyAddress extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      addressId: this.props.basket.addressId ? this.props.basket.addressId : '',
      addresses:this.props.data.addresses?this.props.data.addresses:[],
      organizationAddress:this.props.data.userOrganizationAddress?this.props.data.userOrganizationAddress:[],
      fullAddress:[],
      deleteId:'',
      organid:'',
      deliveryZoneId:null
    };
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  alertExpToggle = (id) => {
    this.setState({
      deleteId : id
    },()=>{
      this.props.showModal({
        alertExp: true,
      });
    })
  };

  fetchAddress = () => {
    var elOwl = document.querySelector(`.owl-stage`);
    let width = elOwl.style.width.split("px")[0];
    let widthNew = elOwl.style.width = width;
    var el = document.querySelector(`.item-${this.state.deleteId}`);
    el.parentElement.remove();
    $('#demo').trigger('to.owl.carousel', [0, 500, true]);
  }


  deleteAddress = () => {
    userDeleteAddressPost({"id":this.state.deleteId}).then(
      response => {
        this.props.showModal({
          alertExp: false,
        });
        if(response.status === true){
          this.fetchAddress();
          this.props.showAlert({
            text: response.message_fa,
            color: "success",
            delay: 3000
          });
        }else{
          this.props.showAlert({
            text: response.message_fa,
            color: "danger",
            delay: 3000
          });
        }
      }
    )
  }

  handleOptionChange = (e) => {
    this.setState({
        addressId: e.target.value,
        organid: e.target.getAttribute('organid'),
        deliveryZonePrice:e.target.getAttribute('deliveryprice'),
        deliveryZoneId:e.target.getAttribute('deliveryzoneid'),
      }, ()=>
        this.props.changeAddressId({addressId:this.state.addressId,organizationAddressId:this.state.organid,deliveryZonePrice:this.state.deliveryZonePrice,deliveryZoneId:this.state.deliveryZoneId})
    );
  }


  componentDidMount(){
      let fullAddress = this.props.data.userOrganizationAddress.concat(this.props.data.addresses);
      this.setState({
        fullAddress
      },()=>{
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
        })
      })
  }

  render() {
    const ChiliOwlDemoItems = this.state.fullAddress.map((item, i) =>
      <div
        key={i}
        className={`item item-${item.id}`}
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
              organid={item.organizationAddressId}
              deliveryprice={item.deliveryZonePrice}
              deliveryzoneid={item.deliveryZoneId}
            />
          </div>
          <div className="MyAddress__details">
            <div className="MyAddress__details-action">
              <Link to={`/profile/edit-address/${item.id}`}>
                <span className="chilivery-edit"> </span>
              </Link>
              <span 
                className="leftM10"
                style={{float:"left"}}
                onClick={() => this.alertExpToggle(item.id)}
              >
                <span className="chilivery-delete text20"> </span>
              </span>
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
          <AlertDeleteAddress
            deleteAddress = { () => this.deleteAddress(this.state.deleteId)}
          />
          <div id="demo" className="owl-carousel owl-theme zIndex0">
          <Link to="/profile/add-new-address" className="AddAddress">
            <span className="chilivery-add"> </span>
            <p>‌آدرس جدید</p>
          </Link>
            {this.state.fullAddress.length > 0 &&
              <React.Fragment>
                {ChiliOwlDemoItems}
              </React.Fragment>
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
    showModal: showStatus => {
      dispatch(showModal(showStatus));
    },
    showAlert: (showStatus) => {
      dispatch(addToast(showStatus));
    },
  };
};

const mapStateToProps = state => ({
  auth: state.auth,
  basket:state.Basket,
  modals: {
    alertExp: state.Modals.alertExp,
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyAddress);
