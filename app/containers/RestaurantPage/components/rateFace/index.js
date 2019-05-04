import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';

class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      percentage: {
        start: 0,
        end: this.props.end
      },
    };
  }
  componentDidMount(){
    const rateAnimate = ((end) => {
      let setTimer = setInterval(() => {
        this.setState({
          percentage: {
            start: this.state.percentage.start + 1,
            end:this.props.end,
          }
        }, () => {
          if (this.state.percentage.start >= this.state.percentage.end) {
            clearTimeout(setTimer);
          }
        })
      }, 0);
    })()

  }
  render() {
    const { percentage } = this.state;
    const { color, iconStar} = this.props;
    return (
      <div className="col text-center padd5">
        <div className="center">
          <CircularProgressbar
            percentage={percentage.start}
            styles={{
              path: {
                stroke: color,
                transition: 'stroke-dashoffset 0s ease 0s',
              },
            }}
          />
          <span className={`icon absolute text30 icon ${iconStar}`}> </span>
        </div>
        <span>{percentage.start}%</span>
      </div>
    );
  }
}

export default index;