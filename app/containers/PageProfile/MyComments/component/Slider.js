import React from 'react';
import $ from 'jquery';

class Slider extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}

	componentDidMount() {
		//fow OWL.Carousel
		$(document).ready(function () {
			$('#demo').owlCarousel({
				rtl: true,
				loop: false,
				margin: 15,
				nav: false,
				dots: false,
				autoWidth: true,
		
			});
		});
	}

	render() {
		let ChiliOwlDemo = ['چیزبرگر','پپرونی','میرزاقاسمی','همبرگر','ماکارانی','سیرابی']
		let ChiliOwlDemoItems = ChiliOwlDemo.map((posterItem, i) =>
			<div
				key={i}
				className="item"
				
			>
				<span style={{
					padding:'5px 10px',
					fontSize:'14px',
					borderRadius:'10px',
					display:"inline-block",
					border:"1px solid green"
				}}>{posterItem}</span>
			</div>
		);

		return (
			<div className="ltr-plugin">
				<div id="demo" className="owl-carousel owl-theme">
					{ChiliOwlDemoItems}
				</div>
			</div>
		);
	}
}

export default Slider;