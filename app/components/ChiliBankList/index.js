import React,{Component} from 'react';
import { bankGetways } from '../../api/account';
import { connect } from "react-redux";
import { addToast } from '../../actions/Notifications';

class BankList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gatewayList: [],
        };
    }
    
    componentDidMount() {
        bankGetways().then(res=>{
            if(res.status){
                this.setState({
                    gatewayList: Array.isArray(res.result) ? res.result : []
                })
                if(Array.isArray(res.result) && res.result.length > 0 && res.result[0]){
                    this.props.onChange("gatewayId",res.result[0].id);
                }
            }else{
                this.props.showAlert({
                    text: res.message,
                    color: "danger",
                });
            }
        })
    }

    changeGateway= e => {
        if(e.target.checked){
            this.props.onChange("gatewayId",parseInt(e.target.value));
        }
    }
    render() {
        return (
            <div className="row banks-row">
                {this.state.gatewayList.map(gateway => (
                    <div key={gateway.id} 
                        className="col-6">
                        <label className="radio-wrapper">
                            <div className="label-parent">
                                <input
                                    type="radio"
                                    className="radio-input"
                                    name="gateway"
                                    checked={this.props.gatewayId === gateway.id}
                                    onChange={this.changeGateway}
                                    value={gateway.id}
                                />
                                <div className="radio-face" />
                                <i />
                            </div>
                            <span className="clearfix">
                                {gateway.name}
                                <img
                                    src={gateway.logo}
                                    className="pull-left"
                                    alt="chili" />
                            </span>
                        </label>
                    </div>
                ))}
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => ({
    showAlert: (showStatus) => {
      dispatch(addToast(showStatus));
    },
});
const mapStateToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(BankList);