import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button } from 'reactstrap';
import classnames from 'classnames';
import SearchInput, { createFilter } from 'react-search-input'

const KEYS_TO_FILTERS = ['name']

import './style.scss';
/* eslint-disable react/prefer-stateless-function */
class UserPosition extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.searchUpdated = this.searchUpdated.bind(this);
    this.handleChange = this.handleChange.bind(this);


    this.state = {
      activeTab: '1',
      searchTerm: '',
      cityId:'',
      cityList: [
        { name: 'تهران', id: '1' },
        { name: 'مشهد', id: '2' },
        { name: 'کرج', id: '3' },
        { name: 'شیراز', id: '4' },
        { name: 'اصفهان', id: '5' },
      ]
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }

  handleChange(event) {
    this.setState({
      cityId: event.target.value
    },() => { 
      setTimeout(() => {    
        this.toggle('2')
      }, 200);
    }
    );
  }

  componentDidMount() {

  }

  render() {
    const { cityList } = this.state;
    const filteredCity = cityList.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
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
                        <span>
                          {city.name}
                        </span>
                      </label>
                    </div>
                  )
                })
              }

            </div>

          </TabPane>
          <TabPane tabId="2">

          </TabPane>
          <TabPane tabId="3">

          </TabPane>
        </TabContent>

      </div>
    );
  }
}

export default UserPosition;
