import React,{Component} from 'react';
import { Link } from 'react-router-dom';

import { AnimateField, AnimateFieldSheba,CheckBox } from '../../../components/ChiliForm';
import './style.scss';
import icon from '../../../images/icons/transaction_empty.png'

class Transaction extends React.Component{
	constructor(props){
		super(props)
		this.state={
			title: 'لیست تراکنش های من خالی است.',
			
		}
	}

	render(){
		return(
			<div className="transaction">
				<div className="transaction__icon">
					<img className="transaction__img" src={icon} alt=""/>
                    <span className="transaction__title">{this.state.title}</span>
				</div>

				
			</div>
		);
	}
}

export default Transaction;