import React from 'react';
// import CardBox from 'components/CardBox';
import './ErrorHandler.scss';
import { Button } from 'reactstrap';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Page404 from '../../containers/Page404';

const ErrorHandlerUI = (props) => {
    return (
        <div className="ErrorHandlerUI">
            <div className="inner-body">
                <h1 className="error-title">ERROR <span>:(</span></h1>
                <div className="error-body">
                    <p>متاسفانه مشکلی در اجرای برنامه پیش آماده است. لطفا در صورت تکرار موضوع را به پشتیبان سیستم اطلاع
                        دهید.</p>
                    <div className="error-links">
                        <Button onClick={props.backToDashboard} color={'primary'}>
                            بازگشت به صفحه اصلی
                        </Button>

                        <Button onClick={() => {
                            // use browser APIs directly because we are not sure about the cause of error
                            // and we can produce more errors if we use other APIs for doing this.
                            window.location.reload();
                        }} color={'secondary'} className="ml-3">
                            بارگذاری مجدد
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

class ErrorHandler extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            componentCrashed: false,
        };
    }

    componentDidCatch (error, errorInfo) {
        this.setState({
            componentCrashed: true,
        });
    }

    dashboardButtonClick () {
        this.setState({
            componentCrashed: false,
        }, () => {
            this.props.history.push('/');
        });
    }

    render () {
        if(this.props.notFound.show){
            return <Page404 />
        }
        if (this.state.componentCrashed) {
            return <ErrorHandlerUI backToDashboard={this.dashboardButtonClick.bind(this)}/>;
        }

        return this.props.children;
    }
}

const mapStateToProps = state => ({
    notFound: state.notFound,
});
export default withRouter(connect(mapStateToProps)(ErrorHandler));