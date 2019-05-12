import React,{Component} from 'react';
import { Link } from 'react-router-dom';

import { AnimateField, AnimateFieldSheba,CheckBox } from '../../../components/ChiliForm';
import './style.scss';
import icon from '../../../images/icons/no_address.png'

class NoAddress extends React.Component{
	constructor(props){
		super(props)
		this.state={
			title: 'هنوز آدرسی در لیست آدرس های منتخب ثبت نشده است!',
			
		}
	}

	render(){
		return(
			<div className="no-address hFull center">
				<div className="no-address__icon">
					<img className="no-address__img" src={icon} alt=""/>
                    <span className="no-address__title">{this.state.title}</span>
                    <button class="btn btn-success no-address__btn">افزودن آدرس جدید</button>
				</div>

				
			</div>
		);
	}
}

export default NoAddress;