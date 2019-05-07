import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { userOrder } from '../../../api/application/order';
import { AnimateField, AnimateFieldSheba, CheckBox } from '../../../components/ChiliForm';
import './style.scss';
import OrderEmpty from '../OrderEmpty';
import png from '../../../images/restaurant-profileبرگرستان.png'

class Order extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			title: 'فست فود برگرستان',
			time: '۱۹:۳۵',
			date: '96/7/22',
			cost: '  ۲۸/۰۰۰ تومان ',

			ready: 'در حال آماده سازی...',
			text: 'جزيیات سفارش',
			date1: '۹۶/۷/۱۷',
			time1: '۱۵:۱۳',
			date2: '۹۶/۶/۱۵',
			time2: '۱۴:۰۸',
			date3: '۹۶/۶/۱۰',
			time3: '۲۰:۴۰',
			Text: 'زمان ارسال سفارش: ',
			Date: 'فردا (۹۶/۹/۲۸) ساعت ۱۴:۳۰ تا ۱۵:۳۰',

			orderItems: [],
		}
	}

	componentDidMount() {
		userOrder().then(
			response => {
				console.log(response.result.orders);
				this.setState({
					orderItems: response.result.orders
				},
				)
			}
		)

	}

	render() {
		return (
			<div className="order">
				{this.state.orderItems.length > 0 ?
					<React.Fragment>
						{this.state.orderItems.map(item => (
							<div className={`order-box ${item.statusId === 10 ? "disableBg" : ""}`}>
								<div className="order-box__main flex padd10 center relative">
									<div className="order-box__icon">
										<img className="order-box__img" src={item.restaurant.profile} alt="" />
									</div>
									<div className="order-box__detail">
										<div className="center">
											<span className="order-box__title wFull">{item.restaurant.name}</span>
											{item.canWriteComment ?
												<button className="btn btn-success order-box__btn"
													style={{ minWidth: "100px" }}
												>ثبت نظر</button> :

												<span className={`icon text22 ${
													(item.voteRate === 3 ? "chilivery-star green" :
														item.voteRate === 2 ? "chilivery-smiley-average yellow" :
															"chilivery-smiley-bad red")
													}`
												}
												> </span>
											}
										</div>
										<div className="order-detail bottomP10">
											<span className="order-box__date relative">{item.date}</span>
											<span className="order-box__time relative">{item.time}</span>
											<span className="order-box__cost rightP10">{item.amount.total} تومان</span>
										</div>
										<div className="order-box__dmain center">
											{!!item.statusTitle &&
												<span className="order-dmain__ready center">{item.statusTitle}</span>
											}
											<span className="chilivery-warning-2 icon"> </span>
											<button className="btn btn-link order-dmain__text">{this.state.text}</button>
										</div>
									</div>
									{/* <div className="order-box__bord ">
											<span>پیش سفارش</span>
										</div> */
									}
								</div>
								{/* <div className="order-box__dmain-time">
										<div className="order-box__time">
											<span className="order-dmain__text">{this.state.Text}</span>
											<span className="order-dmain__date">{this.state.Date}</span>
										</div>
									</div>
								*/}

							</div>
						))
						}
					</React.Fragment>
					: <OrderEmpty />
				}

			</div>
		);
	}
}

export default Order;