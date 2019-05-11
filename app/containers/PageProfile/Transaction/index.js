import React,{Component} from 'react';
import { Link } from 'react-router-dom';

import { paymentsList } from '../../../api/application/payment';
import { AnimateField, AnimateFieldSheba,CheckBox } from '../../../components/ChiliForm';
import './style.scss';
import TransactionEmpty from '../TransactionEmpty';
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
            cost:  ' تومان ' ,

            paymentsItems: [],
            
		}
	}

    componentDidMount(){
        paymentsList().then(
            (response) => {
                console.log(response.result.data);
                this.setState({
                    paymentsItems : response.result.data
                },
                )
            }
        )
    }

	render(){
		return(
			<div className="transaction">
                {this.state.paymentsItems.length  > 0 ?
                    <React.Fragment>
                        {this.state.paymentsItems.map(item => (
                            <div className="transaction-box">
                                <div className="transaction-box__main flex padd10">
                                    <div className="transaction-box__detail">
                                        <div className="transaction-box__main-detail flex">
                                            <span className="transaction-box__title">{item.description}</span>
                                            <span className="transaction-box__dcost">{item.amount}</span>
                                        </div>
                                        
                                        <div className="transaction-detail flex">
                                            <div className="transaction-detail__right">
                                                <span className="transaction-box__date">{item.created}</span>
                                                {/* <span className="transaction-box__time">{item.time}</span> */}
                                            </div>
                                            <div className="transaction-detail__left">
                                                <span className="transaction-box__remnant">{item.remaining}</span>
                                                <span className="transaction-box__cost">{this.state.cost}</span>
                                            </div>
                                        </div>
                                        <div className={`transaction-detail__plus-min ${
                                                (item.isDeposit === true ? "successBg" :
                                                "dangerBg" )
                                            }`
                                        }>
                                            <span className={`icon text22 ${
                                                    (item.isDeposit === true ? "chilivery-add " :
                                                     "chilivery-remove" )
                                                }`
                                            }></span>
                                                
                                            {/* <span className="icon chilivery-remove"></span> */}
                                        </div>
                                    </div>	
                                </div>
                            </div>
                        ))
                        }
                    </React.Fragment>
                    : <TransactionEmpty/>
                }
            </div>
		);
	}
}

export default Transaction;