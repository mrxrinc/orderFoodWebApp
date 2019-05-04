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
		const id = this.props.id;
		$(document).ready(function () {
			$(`#demo${id}`).owlCarousel({
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
		const data = this.props.data
		let ChiliOwlDemoItems = data.map((posterItem, i) =>
			<div
				key={i}
				className="item"
				
			>
				<span style={{
					padding:'5px 10px',
					fontSize:'14px',
					borderRadius:'10px',
					display:"inline-block",
					border:`1px solid ${
						(posterItem.quality === 3 || posterItem.quality === null) ? "#1CBD2F" :
						posterItem.quality === 2 ? "#f79e40":
						"#e1373c"
					}`
				}}>{posterItem.name}</span>
			</div>
		);

		return (
			<div className="ltr-plugin">
				<div id={`demo${this.props.id}`} className="owl-carousel owl-theme">
					{ChiliOwlDemoItems}
				</div>
			</div>
		);
	}
}

export default Slider;