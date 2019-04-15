import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { showModal } from '../../actions/Modals';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button } from 'reactstrap';
import classnames from 'classnames';
import SearchInput, { createFilter } from 'react-search-input'
import {history} from '../../store';
import ChiliMap from '../../components/ChiliMap';


import { getRegionByCity, getRegionBySlug } from '../../api/application/region';

const KEYS_TO_FILTERS = ['name'];
const KEYS_TO_FILTERS_DIS = ['name'];

import './style.scss';
/* eslint-disable react/prefer-stateless-function */
class UserPosition extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.searchUpdated = this.searchUpdated.bind(this);
    this.searchUpdatedDis = this.searchUpdatedDis.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeDis = this.handleChangeDis.bind(this);


    this.state = {
      activeTab: '1',
      searchTerm: '',
      searchDistrict: '',
      restaurantListCount:0,
      cityId: '' || 2,
      disSlug: '',
      cityList:this.props.data,
      mapCenter: {},
      map:false,
      districtList: [
        {
          name: 'وزرا',
          id: '1',
          tag: 'خانه',
        },
        {
          name: '22 بهمن',
          id: '2',
          tag: 'محل کار'
        },
        { name: 'آرژانتین', id: '3' },
        { name: 'خیابان سوم', id: '4' },
      ],
      districtListOther: [
        {
          name: 'وزرا',
          id: '11',
          tag: 'خانه',
        },
        {
          name: '22 بهمن',
          id: '12',
          tag: 'محل کار'
        },
        { name: 'آرژانتین', id: '13' },
        { name: 'خیابان سوم', id: '14' },
      ],
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  UserPositionModal = (e) => {
    e.preventDefault();
    this.props.showModal({
      UserPositionModal: false,
    });
    history.push('/restaurants-list')
  };

  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }

  searchUpdatedDis(term) {
    this.setState({ searchDistrict: term })
  }

  handleChange(event) {
    this.setState({
      cityId: parseInt(event.target.value)
    }, () => {
      getRegionByCity(this.state.cityId).then(
        response => {
          this.setState({
            districtListOther: response.result
          },()=>{
            this.toggle('2');
          })
        }
        )
      }
      );
    }
    
    handleChangeDis(event) {
      this.setState({
        disSlug: event.target.value
      }, () => {
        getRegionBySlug(this.state.disSlug).then(
          response => {
            this.setState({
              mapCenter:response.result.mapCenter
            },()=>{
              this.toggle('3');
              this.setState({
                map:true
              })
            })
        }
      )
    });
  }

  componentDidMount() {

        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            }
        }

        const showPosition = (position) => {
            this.setState({
              mapCenter: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                }
            })
        }
        getLocation();
  }

  render() {
    const { cityList, districtList ,districtListOther } = this.state;
    const filteredCity = cityList.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    const filteredDistrict = districtListOther.filter(createFilter(this.state.searchDistrict, KEYS_TO_FILTERS_DIS))
    return (
      <div className="location__user-position">

        <Nav tabs>

          <NavItem className="col center">
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              شهر
            </NavLink>
          </NavItem>

          <NavItem className="col center">
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              محله
            </NavLink>
          </NavItem>

          <NavItem className="col center">
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              مکان دقیق
            </NavLink>
          </NavItem>

        </Nav>

        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">

            <div className="location__user-position-search">
              <SearchInput
                className="location__user-position-search-input center"
                onChange={this.searchUpdated}
                placeholder="جستجو ..."
              />
              {filteredCity.length == 0 ?
                <div className="center">
                  <label className="radio-wrapper bottomM center">
                    <span>موردی یافت نشد</span>
                  </label>
                </div> :
                filteredCity.map(city => {
                  return (
                    <div key={city.id} className="center">
                      <label className="radio-wrapper bottomM center">
                        <div className="label-parent">
                          <input
                            type="radio"
                            className="radio-input"
                            // name="cityId"
                            checked={this.state.cityId === city.id}
                            onChange={this.handleChange}
                            value={city.id}
                          />
                          <div className="radio-face" />
                        </div>
                        <span className="location__user-position-search-wrapper">
                          {!!city.tag &&
                            <span className="location__user-position-search-tag btn leftM10 white">
                              {city.tag}
                            </span>
                          }
                          <span className="location__user-position-search-name">
                            {city.name}
                          </span>
                        </span>
                      </label>
                    </div>
                  )
                })
              }

            </div>



          </TabPane>
          <TabPane tabId="2">
            <div className="location__user-position-search">
              <SearchInput
                className="location__user-position-search-input center"
                onChange={this.searchUpdatedDis}
                placeholder="جستجو ..."
              />
            </div>
            <div className="location__user-position-mydis">
              <div className="location__user-position-wrapper flex rightP15 leftP15 topP10 bottomP10">
                <span className="location__user-position-title flex center">
                  <i className="icon chilivery-my-address text22" />
                  <span className="text16 rightM5">آدرس های من</span>
                </span>
              </div>

              <div className="location__user-position-wrapper">
                {districtList.map(city => {
                    return (
                      <div key={city.id} className="center">
                        <label className="radio-wrapper bottomM center">
                          <div className="label-parent">
                            <input
                              type="radio"
                              className="radio-input"
                              // name="cityId"
                              checked={this.state.disSlug == city.slug}
                              onChange={this.handleChangeDis}
                              value={city.id}
                            />
                            <div className="radio-face" />
                          </div>
                          <span className="location__user-position-search-wrapper">
                            {!!city.tag &&
                              <span className="location__user-position-search-tag btn leftM10 white">
                                {city.tag}
                              </span>
                            }
                            <span className="location__user-position-search-name">
                              {city.name}
                            </span>
                          </span>
                        </label>
                      </div>
                    )
                  })
                }
              </div>

            </div>

              <div className="location__user-position-otherdis">
              <div className="location__user-position-wrapper flex rightP15 leftP15 topP40 bottomP10">
              <span className="location__user-position-title flex center">
                <i className="icon chilivery-group-pins text22" />
                <span className="text16 rightM5">سایر محله‌ها</span>
              </span>
              <Link to="" color="success" className="btn btn-success rightMauto flex">همه رستوران‌های شهر تهران</Link>
            </div>
            <div className="location__user-position-wrapper">
                {filteredDistrict.length == 0 ?
                  <div className="center">
                    <label className="radio-wrapper bottomM center">
                      <span>موردی یافت نشد</span>
                    </label>
                  </div> :
                  filteredDistrict.map(city => 

                      <div key={city.id} className="center">
                        <label className="radio-wrapper bottomM center">
                          <div className="label-parent">
                            <input
                              type="radio"
                              className="radio-input"
                              // name="cityId"
                              checked={this.state.disSlug === city.slug}
                              onChange={this.handleChangeDis}
                              value={city.slug}
                            />
                            <div className="radio-face" />
                          </div>
                          <span className="location__user-position-search-wrapper">
                            <span className="location__user-position-search-name">
                              {city.name}
                            </span>
                          </span>
                        </label>
                      </div>
                  )
                }
              </div>
            </div>
          </TabPane>
          <TabPane tabId="3">
          
              <ChiliMap 
                cityId={this.state.cityId}
                mapCenter={
                  { 
                    lat: this.state.mapCenter.lat || 35.704334,
                    lng: this.state.mapCenter.lon || 51.393625
                  }
                }
              />
          </TabPane>
        </TabContent>

      </div>
    );
  }
}
const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => ({
  showModal: (showStatus) => {
      dispatch(showModal(showStatus))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPosition);
