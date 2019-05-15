import React from 'react';
import {connect} from 'react-redux';
import { userOrder } from '../../../api/application/order';
import NavigationBar from '../../../components/NavigationBar';
import Loading from '../../../components/ChiliLoading';
import OrderEmpty from '../OrderEmpty';
import OrderReviewModal from '../../../components/ChiliModal/components/OrderReviewModal';
import { showModal } from '../../../actions/Modals';

import './style.scss';

class Order extends React.Component {
	constructor(props) {
		super(props)
		this.state={
			loading: true,
			orderItems: [],
			orderItemFilter:[]
		}
	}

	
	componentDidMount() {
		this.fetchOrder();
	}

	fetchOrder = () => {
		userOrder().then(
			response => {
				console.log('MY ORDERS -==>>>', response.result.orders);
				this.setState({
					orderItems: response.result.orders,
					loading: false,
					orderReviewShow: false,
					commentData: {},
				},
				)
			}
		)
	}

	yourCommentModal = () => {
    this.props.showModal({
      yourCommentModal: true,
    });
  }


  orderReviewModal = () => {
    this.props.showModal({
      orderReviewModal: true,
    });
	};
	
  getOrderReview = (orderId) => {
		const orderItems = this.state.orderItems;
		const orderItemFilter = orderItems.filter((item) => item.id === orderId);
		this.setState({orderItemFilter},()=>{
			this.orderReviewModal();
		});
	}
	
  getCommentReview = (orderId) => {
		const orderItems = this.state.orderItems;
		const orderItemFilter = orderItems.filter((item) => item.id === orderId);
		this.setState({orderItemFilter},()=>{
			this.orderReviewModal();
		});
  }

	render() {
		return (
			<div className="order whFull">
				<NavigationBar 
					back
					background
					title="سفارشات من"
				/>
				{this.state.loading ?
					<div className="whFull center">
						<Loading />
					</div>
					: 
					<React.Fragment>
						{this.state.orderItems.length == 0 ?
								<div className="whFull center">
									<OrderEmpty />
								</div>:
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
														{
															// item.canWriteComment ?
															// <button className="btn btn-success order-box__btn"
															// 	onClick={()=>this.getOrderReview(item.id)}
															// 	style={{ minWidth: "100px" }}
															// >ثبت نظر</button> :

															<span className={`icon text22 ${
																(item.voteRate === 3 ? "chilivery-star green" :
																	item.voteRate === 2 ? "chilivery-smiley-average yellow" :
																	item.voteRate === 1 ? "chilivery-smiley-bad red" : "")
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
														<button className="btn btn-link order-dmain__text" onClick={()=>this.getOrderReview(item.id)}>جزییات سفارش</button>
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
						}
					</React.Fragment>
				}
				{this.state.orderItemFilter.length > 0 ?
					<OrderReviewModal 
						type="profile"
						data={this.state.orderItemFilter}
						headerAlign="center"
						headerColor="#eaeaea"
						bodyColor="#f5f5f5"
					/>:
					null
				}

				{/* {(this.state.orderItems.canWriteComment !== null) ?
					<YourCommentModal
						data={this.state.orderItems.canWriteComment}
						headerAlign="center"
						headerColor="#eaeaea"
						bodyColor="#f5f5f5"
						onSuccess={()=>this.fetchOrder()}
					/> : null
				} */}
			</div>
		);
	}

}


const mapStateToProps = state => ({
  modals: {
    orderReviewModal: state.Modals.orderReviewModal,
    yourCommentModal: state.Modals.yourCommentModal,
  },
});
const mapDispatchToProps = dispatch => ({
  showModal: showStatus => {
    dispatch(showModal(showStatus));
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Order);

