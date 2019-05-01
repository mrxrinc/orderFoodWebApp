import React,{Component} from 'react';
import { Link } from 'react-router-dom';

import { AnimateField, AnimateFieldSheba,CheckBox } from '../../../components/ChiliForm';
import './style.scss';
import png from '../../../images/restaurant-profileبرگرستان.png'

class Transaction extends React.Component{
	constructor(props){
		super(props)
		this.state={
            title1: 'برداشت از موجودی برای خرید از شیلا(ساعی) به شماره سفارش ۴۹۴۱۱۶۲',
            title2:'افزایش موجودی با کد تخفیف mmohseni برای خرید ازشیلا (ساعی) به شماره سفارش 4941162',
            title3:'افزایش موجودی حساب از طریق درگاه پرداخت بانکی برای خرید از شیلا (ساعی) به شماره سفارش 4941162',
            title4: 'برداشت از موجودی برای خرید از نون و ماست (مطهری) به شماره سفارش ۴۹۴۱۱۶۲',
            title5: 'افزایش موجودی حساب از طریق درگاه پرداخت بانکی برای خرید از نون و ماست (مطهری) به شماره سفارش 4941162',
            time: '۱۹:۵۳',
            date: '۹۶/۷/۲۲',
            remnant:'باقیمانده : ',
            cost1: '۳۸۵ تومان',
            cost2: '۱۴/۶۱۰ تومان',
            cost3: '۱۲/۴۷۶ تومان',
            dcost1: '۱۴/۲۲۵- تومان',
            dcost2: '۲/۱۳۴ تومان',
            dcost3: '۱۲/۰۹۱ تومان',
            dcost4: '۱۴/۵۰۰- تومان',
            
		}
	}

	render(){
		return(
			<div className="transaction">
				<div className="transaction-box">
					<div className="transaction-box__main flex padd10">
						<div className="transaction-box__detail">
                            <div className="transaction-box__main-detail flex">
                                <span className="transaction-box__title">{this.state.title1}</span>
							    <span className="transaction-box__dcost">{this.state.dcost1}</span>
                            </div>
                            
                            <div className="transaction-detail flex">
                                <div className="transaction-detail__right">
                                    <span className="transaction-box__date">{this.state.date}</span>
                                    <span className="transaction-box__time">{this.state.time}</span>
                                </div>
                                <div className="transaction-detail__left">
                                    <span className="transaction-box__remnant">{this.state.remnant}</span>
                                    <span className="transaction-box__cost">{this.state.cost1}</span>
                                </div>
                            </div>
						</div>	
					</div>

					
				</div>


				<div className="transaction-box">
					<div className="transaction-box__main flex padd10">
						<div className="transaction-box__icon">
							
						</div>
						<div className="transaction-box__detail">
                            <div className="transaction-box__main-detail flex">
                                <span className="transaction-box__title">{this.state.title2}</span>
                                <span className="transaction-box__dcost">{this.state.dcost2}</span>
							</div>
                            <div className="transaction-detail flex">
                                <div className="transaction-detail__right">
                                    <span className="transaction-box__date">{this.state.date}</span>
                                    <span className="transaction-box__time">{this.state.time}</span>
                                </div>
                                <div className="transaction-detail__left">
                                    <span className="transaction-box__remnant">{this.state.remnant}</span>
                                    <span className="transaction-box__cost">{this.state.cost2}</span>
                                </div>
                            </div>
						</div>
					</div>
				</div>


				<div className="transaction-box">
					<div className="transaction-box__main flex padd10">
						<div className="transaction-box__icon">
							
						</div>
						<div className="transaction-box__detail">
                            <div className="transaction-box__main-detail flex">
							    <span className="transaction-box__title">{this.state.title3}</span>
							    <span className="transaction-box__dcost">{this.state.dcost3}</span>
							</div>
                            <div className="transaction-detail flex">
                                <div className="transaction-detail__right">
                                    <span className="transaction-box__date">{this.state.date}</span>
                                    <span className="transaction-box__time">{this.state.time}</span>
                                </div>
                                <div className="transaction-detail__left">
                                    <span className="transaction-box__remnant">{this.state.remnant}</span>
                                    <span className="transaction-box__cost">{this.state.cost3}</span>
                                </div>
                            </div>
						</div>
					</div>
				</div>

                <div className="transaction-box">
					<div className="transaction-box__main flex padd10">
						<div className="transaction-box__icon">
							
						</div>
						<div className="transaction-box__detail">
                            <div className="transaction-box__main-detail flex">
							    <span className="transaction-box__title">{this.state.title4}</span>
							    <span className="transaction-box__dcost">{this.state.dcost4}</span>
							</div>
                            <div className="transaction-detail flex">
                                <div className="transaction-detail__right">
                                    <span className="transaction-box__date">{this.state.date}</span>
                                    <span className="transaction-box__time">{this.state.time}</span>
                                </div>
                                <div className="transaction-detail__left">
                                    <span className="transaction-box__remnant">{this.state.remnant}</span>
                                    <span className="transaction-box__cost">{this.state.cost1}</span>
                                </div>
                            </div>
						</div>
					</div>
				</div>

                <div className="transaction-box">
					<div className="transaction-box__main flex padd10">
						<div className="transaction-box__icon">
							
						</div>
						<div className="transaction-box__detail">
                            <div className="transaction-box__main-detail flex">
							    <span className="transaction-box__title">{this.state.title5}</span>
							    <span className="transaction-box__dcost">{this.state.dcost3}</span>
							</div>
                            <div className="transaction-detail flex">
                                <div className="transaction-detail__right">
                                    <span className="transaction-box__date">{this.state.date}</span>
                                    <span className="transaction-box__time">{this.state.time}</span>
                                </div>
                                <div className="transaction-detail__left">
                                    <span className="transaction-box__remnant">{this.state.remnant}</span>
                                    <span className="transaction-box__cost">{this.state.cost3}</span>
                                </div>
                            </div>
						</div>
					</div>
				</div>


			</div>
		);
	}
}

export default Transaction;