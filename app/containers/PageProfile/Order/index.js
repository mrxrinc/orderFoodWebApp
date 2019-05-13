import React from 'react';

import { userOrder } from '../../../api/application/order';
import NavigationBar from '../../../components/NavigationBar';
import Loading from '../../../components/ChiliLoading';
import OrderEmpty from '../OrderEmpty';
import './style.scss';

class Order extends React.Component {
	constructor(props) {
		super(props)
		this.state={
			loading: true,
			orderItems: []
		}
	}

	componentDidMount() {
		userOrder().then(
			response => {
				console.log('MY ORDERS -==>>>', response.result.orders);
				this.setState({
					orderItems: response.result.orders,
					loading: false
				},
				)
			}
		)
	}

	content = () => {
		console.log(this.state.orderItems);
		const { orderItems } = this.state

		if(orderItems.length == 0) {
			return (
				<div className="whFull center">
					<OrderEmpty />
				</div>
			)
		} else {
			return (
				<React.Fragment>
					{this.state.orderItems.map(item => (
						<div className={`order-box ${item.statusId === 10 ? "disableBg" : ""}`} key={item.id}>
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
			)
		}
	}

	render() {
		return (
			<div className="order whFull">
				<NavigationBar 
					back
					background
					title="سفارشات من"
				/>
				{this.state.loading ? (
					<div className="whFull center">
						<Loading />
					</div>
				) : this.content()}
			</div>
		);
	}

}

export default Order;
