import React,{Component} from 'react';
import { Link } from 'react-router-dom';

import { AnimateField, AnimateFieldSheba,CheckBox } from '../../../components/ChiliForm';
import './style.scss';
import icon from '../../../images/icons/change_password.png'

class ChiliIntroduce extends React.Component{
	constructor(props){
		super(props)
		this.state={
			headText: 'معرفی چیلیوری به دوستان',
			nameCharacter:'Masoume',
			friendsText:'دوستان خود را دعوت کنید تا پس از اولین سفارش هر کدام یک کد تخفیف ۵۰٪ دریافت نمایید.',
		}
	}

	render(){
		return(
			<div className="chili">
				<div className="chili-introduce relative">
					<div className="chili-head flex relative cover center bottomP20">
						<span className="chili-head__text text22 topP20">{this.state.headText}</span>
					</div>
				</div>

				<div className="chili-friends">
					<div className="chili-name relative">
						<h5 className="chili-name__character center">{this.state.nameCharacter}</h5>
					</div>
					<div className="chili-friends__explain">
						<p className="chili-friends__text">{this.state.friendsText}</p>
					</div>
					
					<div className="chili-media flex center">
						<div className="chili-media__icon">
							<span className="chilivery-email-2 icon-m center"> </span>
						</div>
						<div className="chili-media__icon">
							<span className="chilivery-telegram icon-m center"> </span>
						</div>
						<div className="chili-media__icon">
							<span className="chilivery-sms icon-m center"> </span>
						</div>
					</div>
				</div>

			</div>
		);
	}
}

export default ChiliIntroduce;