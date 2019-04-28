import React,{Component} from 'react';
import { Link } from 'react-router-dom';

import { AnimateField, AnimateFieldSheba,CheckBox } from '../../../components/ChiliForm';
import './style.scss';
import icon from '../../../images/icons/comment_empty.png';
import png from './teach-cm.png';

class ChiliComment extends React.Component{
	constructor(props){
		super(props)
		this.state={
			headCm:'شما هنوز هیچ نظری درباره سفارش های خود ثبت نکرده اید.',
			btnComment:'مشاهده لیست سفارش ها',
			textCm: 'برای ثبت نظر و امتیاز می توانید بعد از تحویل سفارش به بخش سفارش های من در پروفایل مراجعه نمایید.'
		}
	}

	render(){
		return(
			<div className="chili-comment">
				<div className="chili-comment__header">
					<img className="comment-icon" src={icon} alt="comment-empty"/>
					<span className="comment-header">{this.state.headCm}</span>
				</div>

				<div className="chili-comment__explain">
					<span className="comment__text">{this.state.textCm}</span>
					<div className="comment__icon">
						<span className="chilivery-arrow"> </span>
					</div>
					<img className="comment-guide" src={png} alt=""/>
				</div>
				<div className="chili-comment__button">
					<button className="btn btn-success comment__btn">{this.state.btnComment}</button>
				</div>

				
			</div>
		);
	}
}

export default ChiliComment;