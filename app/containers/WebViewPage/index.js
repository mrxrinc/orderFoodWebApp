import React from 'react';
import { Link } from 'react-router-dom';



class WebViewPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      url:props.match.params.slug
    };
  }

  render() {
    return (
      <React.Fragment>
        {this.state.url &&
          <iframe
            src={`https://chilivery.com/staticapp/${this.state.url}/`}
            className="web-view-page hFull center"
            style={{
              width:"100%",
              border:'0'
            }} 
          />
        }
      </React.Fragment>
    );
  }
}

export default WebViewPage;
