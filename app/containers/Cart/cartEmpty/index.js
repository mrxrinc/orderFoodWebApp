import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';
import icon from '../../../images/icons/cart_empty.png'

const CartEmpty = () => ( 
	<div className="order-empty hFull center">
		<div className="order-empty__icon">
			<img className="order-empty__img" src={icon} alt=""/>
			<span className="order-empty__title">سبد خرید شما خالی است!</span>
		</div>
	</div>
);

export default CartEmpty;