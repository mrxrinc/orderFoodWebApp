/**
 *
 * ChiliButton
 *
 */

import React from 'react';
import { Button } from 'reactstrap';
import './style.scss';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class ChiliButton extends React.Component {
  render() {
    return (
      <div>
        <Button
          className={`${
            this.props.size === 'small' ? 'smallButton' : 'bigButton'
          } ${this.props.type === 'primary' ? 'whiteButton' : 'greenButton'}`}
        >
          {this.props.title}
        </Button>
      </div>
    );
  }
}

ChiliButton.propTypes = {
  title: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
};
export default ChiliButton;
