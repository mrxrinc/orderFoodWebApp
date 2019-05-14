import React from 'react';
import './style.scss';
import Slider from './component/Slider';

class MyComments extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
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
												item.voteNum === 1 ? "chilivery-smiley-bad red" :
												item.voteNum === 2 ? "chilivery-smiley-average yellow":
												"chilivery-star green"
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
												item.voteNum === 1 ? "chilivery-smiley-bad red" :
												item.voteNum === 2 ? "chilivery-smiley-average yellow":
												"chilivery-star green"
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

			</div>
		);
	}
}

export default MyComments;