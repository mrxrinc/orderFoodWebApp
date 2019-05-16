/* eslint-disable react/prop-types */
import React from 'react';
import { history } from '../../store';
import './style.scss';

const scrollValue = 200;

const goBack = () => {
  history.goBack()
}
const hasBackground = props => {
  if(props.background) return 'hasBackground';
}
const fixBg = props => {
  if(props.scroll > scrollValue) return 'hasBackground';
  else return false;
}

const iconsColor = props => {
  if(props.scroll < scrollValue) return 'white';
  else return 'primary';
}

export default props => (
  <React.Fragment>
    <div className={`navWrapper wFull ${hasBackground(props)} ${fixBg(props)}`}>
      <div className="flex whFull spaceBetween">
        
        <div className="navButtonsWrapper center">
          {props.back && (
            <div className={`whFull center ${iconsColor(props)}`} onClick={goBack} >
              <span className="chilivery-back text22" />
            </div>
          )}
          {props.map && (
            <div className={`whFull center ${iconsColor(props)}`} onClick={props.map} >
              <span className="chilivery-location text25" />
            </div>
          )}
        </div>

        <div className="center hP10 primary w60" onClick={props.titleOnPress}>
            {/* Normal title */}
          {props.title && <h4 className="text16 bold topM10 text-truncate">{props.title}</h4>}
            {/* Restaurant page Scroll base Title */}
          {props.fixTitle && fixBg(props) && <h4 className="text16 bold topM10 text-truncate">{props.fixTitle}</h4>}
            {/* we need an arrow for the titles with action like open related Modal */}
          {props.titleOnPress && <span className="chilivery-arrow-bottom text10 rightM10 topM5" />}
        </div>

        <div className="navButtonsWrapper center">
          {props.share && (
            <div className={`whFull center navButtons ${iconsColor(props)}`} onClick={props.share} >
              <span className="chilivery-share text25 bottomM3" />
            </div>
          )}
          {props.filter && (
            <div className={`whFull center navButtons ${iconsColor(props)}`} onClick={props.toggleModal} >
              <span className="chilivery-filter text25" />
            </div>
          )}
          {props.like && fixBg(props) !== 'hasBackground' && ( // we wont see like button after scroll
            <div className={`whFull center navButtons ${iconsColor(props)}`} onClick={props.like} >
              <span className="chilivery-fav-empty text25" />
            </div>
          )}
        </div>
      </div>
    </div>

    {props.background && <div className="heightFix" />}
  </React.Fragment>
);

