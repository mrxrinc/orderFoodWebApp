import React,{Component} from 'react';
import { Link } from 'react-router-dom';

import { AnimateField, AnimateFieldSheba,CheckBox } from '../../../components/ChiliForm';
import './style.scss';

import png from '../../../images/logo-home.png'

class ChiliChance extends React.Component{
	constructor(props){
		super(props)
		this.state={
			chanceHead: 'گروه بندی کن جایزه بگیر',
			chanceHistory:'۹۶/۱۰/۱۴ - ۱۴:۱۸',
			mainText:'چیلی کاپ, گروه بندی ایران در جام جهانی را حدس بزن و جایزه بگیر!',
			chanceText:'با شرکت در مسابقه چیلی کاپ و حدس زدن گروه بندی تیم ملی ایران در جام جهانی ۲۰۱۸ روسیه, علاوه بر دریافت چندین کد تخفیف , برنده جوایز بسیار ارزنده از وب سایت چیلیوری باشید.',
			chanceBtn:'بزن بریم!'
		}
	}

	render(){
		return(
			<div className="chilichance">
				<div className="chili-chance relative">
					<div className="chili-head-img center">
						<img className="logo-home" src={png} alt="logo-home" />
					</div>
					<div className="chili-head">
						<span className="chili-chance__head text22 topP20">{this.state.chanceHead}</span>
					</div>
				</div>

				<div className="chili-chance-main">
					<div className="chili-chance__explain">
						<span className="chili-chance__history">{this.state.chanceHistory}</span>
						<span className="chili-main__text center">{this.state.mainText}</span>
						<span className="chili-chance__text">{this.state.chanceText}</span>
					</div>
				</div>

				<div className="chili-chance-button">
					<button className="btn btn-success chance__btn">{this.state.chanceBtn}</button>
				</div>

			</div>
		);
	}
}

export default ChiliChance;