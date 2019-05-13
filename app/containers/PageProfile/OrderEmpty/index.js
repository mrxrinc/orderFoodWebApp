import React,{Component} from 'react';
import { Link } from 'react-router-dom';

import { AnimateField, AnimateFieldSheba,CheckBox } from '../../../components/ChiliForm';
import './style.scss';
import icon from '../../../images/icons/order_history_empty.png'

class OrderEmpty extends React.Component{
	constructor(props){
		super(props)
		this.state={
			title: 'لیست سفارش های شما خالی است.',
			
		}
	}

	render(){
		return(
			<div className="order-empty hFull center">
				<div className="order-empty__icon">
					<img className="order-empty__img" src={icon} alt=""/>
					<span className="order-empty__title">{this.state.title}</span>
				</div>
			</div>
		);
	}
}

export default OrderEmpty;