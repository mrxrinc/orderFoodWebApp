import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { AnimateField, AnimateFieldSheba, CheckBox } from '../../../components/ChiliForm';
import './style.scss';
import png from '../../../images/restaurant-profileبرگرستان.png'
import Slider from './component/Slider';

class MyComments extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			title1: ' برگرستان',
			title: ' برگرستان',
			title2: 'پاسخ مدیر رستوران',
			// time: '۱۹:۳۵',
			date: 'چهارشنبه ۲ اردیبهشت ۹۶',
			text: 'غذا بسیار خوشمزه و لذیذ بود. فقط یه مقداری دیر به دستم رسید که من هم عجله زیادی نداشتم. در کل خیلی عالی بود.',
			orderBtn: 'ثبت امتیاز و نظر',
			answer: 'با تشکر از وقتی که برای ارسال نظر گذاشتید. در سفارشات بعدی این مشکل رفع خواهد شد.'
		}
	}

	render() {
		const data = this.props.data;
		return (
			<div className={`mycomment ${this.props.type !== "restaurant" ? "col":""}`}>
				{data.map((item, index) =>
					<div className="mycomment-box" key={index}>
						<div className="mycomment-box__main flex padd10 bgWhite">

							{this.props.type !== "restaurant" ?
								<React.Fragment>
									{ item.logo && 
										<div className="mycomment-box__icon leftP5">
											<img className="mycomment-box__img" src={item.logo} alt="" />
										</div>
									}
								</React.Fragment>
								: null
							}

							<div className="mycomment-box__detail overhide wFull">
								{this.props.type !== "restaurant" ?
									<React.Fragment>
										<div className="mycomment__detail-main">
											<span className="mycomment-box__title">{item.restaurantName}</span>
											<span className={`icon text22 rightMauto ${
												item.voteNum === 3 ? "chilivery-star green" :
												item.voteNum === 2 ? "chilivery-smiley-average yellow":
												"chilivery-smiley-bad red"
											}`}> </span>
										</div>

										<div className="mycomment-detail">
											<span className="mycomment-box__date">{item.date}</span>
											<span className="mycomment-box__text bottomP10 topP10">{item.text}</span>
										</div>
									</React.Fragment> :

									<React.Fragment>
										<div className="mycomment__detail-main">

											<span className={`icon text22 leftP10 ${
												item.voteNum === 3 ? "chilivery-star green" :
												item.voteNum === 2 ? "chilivery-smiley-average yellow":
												"chilivery-smiley-bad red"
											}`}> </span>


											<span className="mycomment-box__title leftP10">{item.username}</span>
											<span className="mycomment-box__date text14">{item.date}</span>
										</div>

										<div className="mycomment-detail">
											<span className="mycomment-box__text bottomP10 topP10">{item.text}</span>
										</div>
									</React.Fragment>
								}

								<span className="mycomment-box__cost">
									<Slider data={item.foods} id={index} />
								</span>
							</div>

						</div>
						{
							item.replies.map((replay, index) =>
								<div className="mycomment-box__dmain flex padd10" key={index}>
									<div className="mycomment-dmain__img center">
										<span className="icon chilivery-chef-answer mycomment-dmain__icon"> </span>
									</div>
									<div className="mycomment-dmain__box">
										<span className="mycomment-box__title">پاسخ مدیر رستوران</span>
										<span className="mycomment-box__date">{replay.date}</span>
										<span className="mycomment-dmain__answer">{replay.text}</span>
									</div>
								</div>
							)
						}
					</div>

				)}
{/* 
				<div className="mycomment-box">
					<div className="mycomment-box__main flex padd10">
					
						<div className="mycomment-box__detail overhide">
							
								
								<React.Fragment>
									<div className="mycomment__detail-main">
										<span className="icon chilivery-star chili-star leftP10"> </span>
										<span className="mycomment-box__title leftP10">{this.state.title1}</span>
										<span className="mycomment-box__date text14">{this.state.date}</span>
									</div>

									<div className="mycomment-detail">
										<span className="mycomment-box__text bottomP10 topP10">{this.state.text}</span>
									</div>
								</React.Fragment>
							
						</div>
					</div>
				</div> */}

			</div>
		);
	}
}

export default MyComments;