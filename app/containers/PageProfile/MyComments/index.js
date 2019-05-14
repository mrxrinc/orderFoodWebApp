import React from 'react';
import './style.scss';
import { commentByUser, getUser } from '../../../api/application/comment';
import MyComments from './myComments';
import NavigationBar from '../../../components/NavigationBar';
import Loading from '../../../components/ChiliLoading';
class Comments extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			commentData: [],
			userData: [],
			loading: true
		}
	}
	componentDidMount() {

		if (this.props.type !== "restaurant") {
			commentByUser().then(
				response => {
					this.setState({
						commentData: response.result.comments,
						orderRate: true,
						loading: false
					})
				}
			)
		} else {
			this.setState({
				commentData: this.props.data
			}, () => {
				this.setState({
					orderRate: true,
					loading: false
				})
			})
		}


		// getUser().then(
		// 	response => {
		// 		console.log(response)
		// 		this.setState({
		// 			userData:response
		// 		})
		// 	}
		// )
	}

	render() {
		return (
			<div className="mycomment whFull">
				{this.props.type !== "restaurant" ?
					<NavigationBar
						back
						background
						title="نظرات من"
					/> : null
				}
				{this.state.loading ? (
					<div className="whFull center">
						<Loading />
					</div>
				) :
					<React.Fragment>
						{this.state.commentData.length == 0 ?
							<div className="whFull center">
								<p className="text14 bold gray6">نظری وجود ندارد!</p>
							</div> :
							<div className="">
								<MyComments data={this.state.commentData} type={this.props.type} />
							</div>
						}
					</React.Fragment>
				}
			</div>
		);
	}
}

export default Comments;