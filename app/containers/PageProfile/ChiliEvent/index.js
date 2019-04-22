import React,{Component} from 'react';
import { Link } from 'react-router-dom';

import { AnimateField, AnimateFieldSheba,CheckBox } from '../../../components/ChiliForm';
import './style.scss';


class ChiliEvent extends React.Component{
	constructor(props){
		super(props)
		this.state={
			eventTitle: ' ۳۱دی  ۹۶ -   ۲۲:۰۸  ',
			eventText1:'تولد دو سالگی چیلیوری با کلی تخفیف!',
			eventTitle2:'   ۲اردیبهشت  ۹۶ -   ۲۲:۰۸   ',
			eventText2:'افتتاح شعبه های جدید رستوران های گامبی, پدرخوب, عطاویچ و هوم برگر در تهران',
		}
	}

	render(){
		return(
			<div className="chili-event">
				<div className="chili-event__comment">
					<div className="chili-event__task1">
						<span className="event-tilte">{this.state.eventTitle}</span>
						<div className="event-text flex center">
							<span className="event__text1">{this.state.eventText1}</span>
							<span className="chilivery-arrow-left arrow-left"> </span>
						</div>
					</div>

					<div className="chili-event__task2">
						<span className="event-tilte2">{this.state.eventTitle2}</span>
						<div className="event-text flex center">
							<span className="event__text2">{this.state.eventText2}</span>
							<span className="chilivery-arrow-left arrow-left"> </span>
						</div>
					</div>
				</div>

				
			</div>
		);
	}
}

export default ChiliEvent;