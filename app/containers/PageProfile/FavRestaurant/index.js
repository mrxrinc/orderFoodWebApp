import React,{Component} from 'react';
import { Link } from 'react-router-dom';

import { AnimateField, AnimateFieldSheba,CheckBox } from '../../../components/ChiliForm';
import './style.scss';
import png from '../../../images/restaurant-profileبرگرستان.png'


class FavRestaurant extends React.Component{
	constructor(props){
		super(props)
		this.state={
			title1: ' رستوران بادبادک',
            title2:'رستوران لوکس تهران (میدان پالیزی)',
			title3: 'رستوران دلینا',
			item1: 'فست فود',
			item2: 'ایتالیایی',
			item3:' برگر',
            orderBtn: 'ثبت امتیاز و نظر',
            answer: '۲۱/۰۰۰ تومان',
           
		}
	}

	render(){
		return(
            <div className="fav-restaurant">

                <div className="fav-restaurant__main">
                    <div className="fav-box__main flex padd10">
                        <div class="fav-restaurant__img">
                            <img className="fav__img" src={png} alt=""/>
                            <div class="fav-restaurant__discount flex center absolute bgRed white centerText">
                                <span class="text16">30</span>
                                <span class="text12 topM3 leftM3">%</span>
                            </div>
                        </div>
                        <div className="fav-detail-restaurant wFull">
                            <div className="fav-restaurant__detail">
                                <span className="fav-restaurant__title">{this.state.title1}</span>
                                <span className="icon chilivery-fav-full fav-star"> </span>
                            </div>
                            <div className="fav-restaurant__box">
                                <div className="fav-detail">
                                    <span className="fav-restaurant__item">{this.state.item1}</span>
                                    <span className="fav-restaurant__item">{this.state.item2}</span>
                                    <span className="fav-restaurant__item">{this.state.item3}</span>
                                </div>
                                <div className="fav-detail__btn center">
                                    <button class="btn-white btn btn-secondary fav-btn center">مشاهده منو</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="fav-restaurant__main">
                    <div className="fav-box__main flex padd10">
                        <div class="fav-restaurant__img">
                            <img className="fav__img" src={png} alt=""/>
                            {/* <div class="fav-restaurant__discount flex center absolute bgRed white centerText">
                                <span class="text16">30</span>
                                <span class="text12 topM3 leftM3">%</span>
                            </div> */}
                        </div>
                        <div className="fav-detail-restaurant wFull">
                            <div className="fav-restaurant__detail">
                                <span className="fav-restaurant__title">{this.state.title2}</span>
                                <span className="icon chilivery-fav-full fav-star"> </span>
                            </div>
                            <div className="fav-restaurant__box">
                                <div className="fav-detail">
                                    <span className="fav-restaurant__item">{this.state.item1}</span>
                                    <span className="fav-restaurant__item">{this.state.item2}</span>
                                    <span className="fav-restaurant__item">{this.state.item3}</span>
                                </div>
                                <div className="fav-detail__btn center">
                                    <button class="btn-white btn btn-secondary fav-btn center">مشاهده منو</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="fav-restaurant__main">
                    <div className="fav-box__main flex padd10">
                        <div class="fav-restaurant__img">
                            <img className="fav__img" src={png} alt=""/>    
                            <div class="fav-restaurant__discount flex center absolute bgRed white centerText">
                                <span class="text16">30</span>
                                <span class="text12 topM3 leftM3">%</span>
                            </div>
                        </div>
                        <div className="fav-detail-restaurant wFull">
                            <div className="fav-restaurant__detail">
                                <span className="fav-restaurant__title">{this.state.title3}</span>
                                <span className="icon chilivery-fav-full fav-star"> </span>
                            </div>
                            <div className="fav-restaurant__box">
                                <div className="fav-detail">
                                    <span className="fav-restaurant__item">{this.state.item1}</span>
                                    <span className="fav-restaurant__item">{this.state.item2}</span>
                                    <span className="fav-restaurant__item">{this.state.item3}</span>
                                </div>
                                <div className="fav-detail__btn center">
                                    <button class="btn-white btn btn-secondary fav-btn center">مشاهده منو</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
		);
	}
}

export default FavRestaurant;