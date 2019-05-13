import React from 'react';

import { paymentsList } from '../../../api/application/payment';
import './style.scss';
import TransactionEmpty from '../TransactionEmpty';
import NavigationBar from '../../../components/NavigationBar';
import Loading from '../../../components/ChiliLoading';

class Transaction extends React.Component{
	constructor(props){
		super(props)
		this.state={
      remnant:'باقیمانده :',
      cost: ' تومان' ,
      paymentsItems: [],
      loading: true
		}
	}

  componentDidMount(){
    paymentsList().then(
      (response) => {
        console.log(response.result.data);
        this.setState({
          paymentsItems : response.result.data,
          loading: false
        })
      }
    )
  }

  content = () => {
		console.log(this.state.paymentsItems);
		const { paymentsItems } = this.state

		if(paymentsItems.length == 0) {
			return (
				<div className="whFull center">
					<TransactionEmpty />
				</div>
			)
		} else {
			return (
        <React.Fragment>
          {paymentsItems.map(item => (
            <div className="transaction-box">
              <div className="transaction-box__main flex padd10">
                <div className="transaction-box__detail">
                  <div className="transaction-box__main-detail flex">
                    <span className="transaction-box__title">{item.description}</span>
                    <span className="transaction-box__dcost">{item.amount} </span>
                    <span className="transaction-box__cost">{this.state.cost}</span>
                  </div>
                  
                  <div className="transaction-detail flex">
                    <div className="transaction-detail__right">
                      <span className="transaction-box__date">{item.created}</span>
                    </div>
                    <div className="transaction-detail__left">
                      <span className="transaction-box__remnant">{this.state.remnant}</span>
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
      )
    }
  }

	render(){
		return(
			<div className="transaction whFull">
        <NavigationBar 
					back
					background
					title="تراکنش های من"
				/>
				{this.state.loading ? (
					<div className="whFull center">
						<Loading />
					</div>
				) : this.content()}
      </div>
		);
	}
}

export default Transaction;