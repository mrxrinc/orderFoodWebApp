import React,{Component} from 'react';
import { Link } from 'react-router-dom';

import { AnimateField, AnimateFieldSheba,CheckBox } from '../../../components/ChiliForm';
import './style.scss';
import png from '../../../images/restaurant-profileبرگرستان.png'

class Order extends React.Component{
	constructor(props){
		super(props)
		this.state={
			title: 'فست فود برگرستان',
			time: '۱۹:۳۵',
			date: '96/7/22',
			cost:' تومان ۲۸/۰۰۰  ',
			orderBtn: 'ثبت امتیاز و نظر',
			text:'جزيیات سفارش',
			date1: '۹۶/۷/۱۷',
			time1: '۱۵:۱۳',
			date2: '۹۶/۶/۱۵',
			time2: '۱۴:۰۸',
			date3: '۹۶/۶/۱۰',
			time3: '۲۰:۴۰',
		}
	}

	render(){
		return(
			<div className="order">
				<div className="order-box">
					<div className="order-box__main flex padd10 center">
						<div className="order-box__icon">
							<img className="order-box__img" src={png} alt=""/>
						</div>
						
						<div className="order-box__detail">
							<span className="order-box__title">{this.state.title}</span>
							<div className="order-detail">
								<span className="order-box__date">{this.state.date}</span>
								<span className="order-box__time">{this.state.time}</span>
								<span className="order-box__cost">{this.state.cost}</span>
							</div>
							<div className="order-box__dmain">
								<span class="chilivery-warning-2"> </span>
								<button className="btn btn-link order-dmain__text">{this.state.text}</button>
							</div>
						</div>
						<div className="order-box__bord">ثبت سفارش</div>
					</div>
					
				</div>


				<div className="order-box">
					<div className="order-box__main flex center padd10">
						<div className="order-box__icon">
							<img className="order-box__img" src={png} alt=""/>
						</div>
						<div className="order-box__detail">
							<span className="order-box__title">{this.state.title}</span>
							<button class="btn btn-success order-box__btn">{this.state.orderBtn}</button>
							<div className="order-detail">
								<span className="order-box__date">{this.state.date}</span>
								<span className="order-box__time">{this.state.time}</span>
								<span className="order-box__cost">{this.state.cost}</span>
							</div>
							<div className="order-box__dmain">
								<span class="chilivery-warning-2"> </span>
								<button className="btn btn-link order-dmain__text">{this.state.text}</button>
							</div>
						</div>
					</div>
				</div>


				<div className="order-box disableBg">
					<div className="order-box__main flex center padd10">
						<div className="order-box__icon">
							<img className="order-box__img" src={png} alt=""/>
						</div>
						<div className="order-box__detail">
							<span className="order-box__title">{this.state.title}</span>
							<div className="order-detail">
								<span className="order-box__date">{this.state.date1}</span>
								<span className="order-box__time">{this.state.time1}</span>
								<span className="order-box__cost">{this.state.cost}</span>
							</div>
							<div className="order-box__dmain">
								<span class="chilivery-warning-2"> </span>
								<button className="btn btn-link order-dmain__text">{this.state.text}</button>
							</div>
						</div>
					</div>
				</div>


				<div className="order-box">
					<div className="order-box__main flex center padd10">
						<div className="order-box__icon">
							<img className="order-box__img" src={png} alt=""/>
						</div>
						<div className="order-box__detail">
							<span className="order-box__title">{this.state.title}</span>
							<button class="btn btn-success order-box__btn">{this.state.orderBtn}</button>
							<div className="order-detail">
								<span className="order-box__date">{this.state.date2}</span>
								<span className="order-box__time">{this.state.time2}</span>
								<span className="order-box__cost">{this.state.cost}</span>
							</div>
							<div className="order-box__dmain">
								<span class="chilivery-warning-2"> </span>
								<button className="btn btn-link order-dmain__text">{this.state.text}</button>
							</div>
						</div>
					</div>
				</div>


				<div className="order-box">
					<div className="order-box__main flex center padd10">
						<div className="order-box__icon">
							<img className="order-box__img" src={png} alt=""/>
						</div>
						<div className="order-box__detail">
							<span className="order-box__title">{this.state.title}</span>
							<span class="chilivery-star  chili-star"> </span>
							<div className="order-detail">
								<span className="order-box__date">{this.state.date3}</span>
								<span className="order-box__time">{this.state.time3}</span>
								<span className="order-box__cost">{this.state.cost}</span>
							</div>
							<div className="order-box__dmain">
								<span class="chilivery-warning-2"> </span>
								<button className="btn btn-link order-dmain__text">{this.state.text}</button>
							</div>
						</div>
					</div>
				</div>
	
			</div>
		);
	}
}

export default Order;