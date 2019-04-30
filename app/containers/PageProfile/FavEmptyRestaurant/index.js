import React,{Component} from 'react';
import { Link } from 'react-router-dom';

import { AnimateField, AnimateFieldSheba,CheckBox } from '../../../components/ChiliForm';
import './style.scss';
import icon from '../../../images/icons/favorite_empty.png';
import png from './teach_fav.png';

class FavEmptyRestaurant extends React.Component{
	constructor(props){
		super(props)
		this.state={
			headCm:'لیست رستوران های مورد علاقه شما خالی است.',
			btnComment:'جستجوی غذا یا رستوران',
			textCm: 'برای افزودن رستوران به لیست علاقه مندی ها کافی است این آیکن را در لیست رستوران ها لمس کنید.'
		}
	}

	render(){
		return(
			<div className="fav-empty-restaurant">
				<div className="fav-empty-restaurant__header">
					<img className="fav-empty__icon" src={icon} alt="favorite_empty"/>
					<span className="fav-empty__header">{this.state.headCm}</span>
				</div>

				<div className="fav-empty-restaurant__explain">
					<span className="fav-empty__text">{this.state.textCm}</span>
					<div className="fav-empty__icon">
						<span className="chilivery-arrow"> </span>
					</div>
					<img className="fav-empty__guide" src={png} alt=""/>
				</div>
				
				<div className="fav-empty-restaurant__button">
					<button className="btn btn-success fav-empty__btn">{this.state.btnComment}</button>
				</div>

				
			</div>
		);
	}
}

export default FavEmptyRestaurant;