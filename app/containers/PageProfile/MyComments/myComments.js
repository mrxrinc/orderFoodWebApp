import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { AnimateField, AnimateFieldSheba, CheckBox } from '../../../components/ChiliForm';
import './style.scss';
import png from '../../../images/restaurant-profileبرگرستان.png'
import Slider from './component/Slider';
import { commentByUser , getUser } from '../../../api/application/comment';
import MyComments from './index';
class MainComments extends React.Component {
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
			answer: 'با تشکر از وقتی که برای ارسال نظر گذاشتید. در سفارشات بعدی این مشکل رفع خواهد شد.',
			commentData:[],
			userData:[]
		}
	}
  componentDidMount() {

    commentByUser().then(
      response => {
        this.setState({
          commentData: response.result.comments
        }, () => {
          this.setState({
            orderRate: true
          })
        })
      }
		)
		

		getUser().then(
			response => {
				console.log(response)
				this.setState({
					userData:response
				})
			}
		)

	}
	
	render() {
		return (
			<div className="mycomment">
				{this.state.commentData.length > 0 ?
					<div className="col-12">
						<div className="topP40">
							<MyComments data={this.state.commentData} type="profile" />
						</div>
					</div> :null
				}
			</div>
		);
	}
}

export default MainComments;