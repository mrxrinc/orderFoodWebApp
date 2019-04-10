import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button } from 'reactstrap';
import classnames from 'classnames';

import './style.scss';
/* eslint-disable react/prefer-stateless-function */
class UserPosition extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
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

  componentDidMount() {

  }

  render() {
    return (
      <div className="location__user-position">
        <Nav tabs>

          <NavItem className="col center">
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Tab1
            </NavLink>
          </NavItem>

          <NavItem className="col center">
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Moar Tabs
            </NavLink>
          </NavItem>

          <NavItem className="col center">
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Moar Tabs
            </NavLink>
          </NavItem>

        </Nav>

        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <div className="banks-row">
              {this.state.cityList.map(city => (
                <div key={city.id} className="center">
                  <label className="radio-wrapper bottomM center">
                    <div className="label-parent">
                      <input
                        type="radio"
                        className="radio-input"
                        name="city"
                        // checked={this.props.cityId === city.id}
                        // onChange={this.changecity}
                        value={city.id}
                      />
                      <div className="radio-face" />
                    </div>
                    <span>
                      {city.name}
                    </span>
                  </label>
                </div>
              ))}
            </div>
          </TabPane>
          <TabPane tabId="2">

          </TabPane>
        </TabContent>

      </div>
    );
  }
}

export default UserPosition;
