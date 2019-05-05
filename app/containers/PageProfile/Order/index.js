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
			cost:'  ۲۸/۰۰۰ تومان ',
			orderBtn: 'ثبت امتیاز و نظر',
			ready: 'در حال آماده سازی...',
			text:'جزيیات سفارش',
			date1: '۹۶/۷/۱۷',
			time1: '۱۵:۱۳',
			date2: '۹۶/۶/۱۵',
			time2: '۱۴:۰۸',
			date3: '۹۶/۶/۱۰',
			time3: '۲۰:۴۰',
			Text:'زمان ارسال سفارش: ',
			Date: 'فردا (۹۶/۹/۲۸) ساعت ۱۴:۳۰ تا ۱۵:۳۰'
		}
	}

	render(){
		return(
			<div className="order">
				<div className="order-box">
					<div className="order-box__main flex padd10 center relative">
						<div className="order-box__icon">
							<img className="order-box__img" src={png} alt=""/>
						</div>
						
						<div className="order-box__detail">
							<span className="order-box__title">{this.state.title}</span>
							<div className="order-detail bottomP10">
								<span className="order-box__date">{this.state.date}</span>
								<span className="order-box__time">{this.state.time}</span>
								<span className="order-box__cost">{this.state.cost}</span>
							</div>
							<div className="order-box__dmain center">
								<span className="chilivery-warning-2 icon"> </span>
								<button className="btn btn-link order-dmain__text">{this.state.text}</button>
							</div>
						</div>
						<div className="order-box__bord ">
							<span>پیش سفارش</span>
						</div>
					</div>
					<div className="order-box__dmain-time">
						<div className="order-box__time">
							<span className="order-dmain__text">{this.state.Text}</span>
							<span className="order-dmain__date">{this.state.Date}</span>
						</div>
					</div>
					
				</div>


				<div className="order-box">
					<div className="order-box__main flex center padd10">
						<div className="order-box__icon">
							<img className="order-box__img" src={png} alt=""/>
						</div>
						<div className="order-box__detail">
							<div className="center">
								<span className="order-box__title wFull">{this.state.title}</span>
								<button className="btn btn-success order-box__btn"
									style={{minWidth:"100px"}}
								>{this.state.orderBtn}</button>
							</div>
							<div className="order-detail bottomP10">
								<span className="order-box__date">{this.state.date}</span>
								<span className="order-box__time">{this.state.time}</span>
								<span className="order-box__cost">{this.state.cost}</span>
							</div>
							<div className="order-box__dmain center">
								<span className="chilivery-warning-2 icon"> </span>
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
							<div className="order-detail bottomP10">
								<span className="order-box__date">{this.state.date1}</span>
								<span className="order-box__time">{this.state.time1}</span>
								<span className="order-box__cost">{this.state.cost}</span>
							</div>
							<div className="order-box__dmain order-dmain center">
								<span className="chilivery-warning-2 icon"> </span>
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
						`	<div className="center">
								<span className="order-box__title wFull">{this.state.title}</span>
								<button className="btn btn-success order-box__btn"
									style={{minWidth:"100px"}}
								>{this.state.orderBtn}</button>
							</div>
							<div className="order-detail bottomP10">
								<span className="order-box__date">{this.state.date2}</span>
								<span className="order-box__time">{this.state.time2}</span>
								<span className="order-box__cost">{this.state.cost}</span>
							</div>
							<div className="order-box__dmain center">
								<span className="order-dmain__ready center">{this.state.ready}</span>
								<span className="chilivery-warning-2 icon"> </span>
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
							<div className="order__detail-main">

								<span className="order-box__title">{this.state.title}</span>
								<span className="chilivery-star icon"> </span>
							</div>
							<div className="order-detail bottomP10">
								<span className="order-box__date">{this.state.date3}</span>
								<span className="order-box__time">{this.state.time3}</span>
								<span className="order-box__cost">{this.state.cost}</span>
							</div>
							<div className="order-box__dmain center">
								<span className="chilivery-warning-2 icon"> </span>
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