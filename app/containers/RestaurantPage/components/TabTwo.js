/* eslint-disable no-console */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/prop-types */
import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { rateColor } from '../../..//components/GeneralFunctions';
import comment_empty from '../../../images/icons/comment_empty.png';
class TabOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage:{
        start:0,
      }
    };
  }

  componentDidMount(){

    const rateAnimate = (() => {
      let setTimer = setInterval(()=>{
        this.setState({
          percentage:{
            start: this.state.percentage.start + 1,
            end: 75,
          }
        },()=>{
          if(this.state.percentage.start >= this.state.percentage.end){
            clearTimeout(setTimer);
          }
        })
      }, 0);
    })()

  }

  rateStar = (vRate) => (
    <div
    className={`flex center round5 rightP5 leftP5 ${rateColor(vRate)}`}
    >
      <span className="white text16 leftM3 topM5">{vRate}</span>
      <span className="chilivery-smiley-good2 white text14" />
    </div>
  )

  rateFace = (vStart,iconStart,color) => (
    <div className="col text-center padd5">
      <div className="center">
          <CircularProgressbar
            percentage={vStart}
            styles={{
              path: {
                stroke: color,
                transition: 'stroke-dashoffset 0s ease 0s',
              },                
            }}
          />
          <span className={`icon absolute text30 icon ${iconStart}`}> </span>
      </div>              
      <span>{vStart}</span>
    </div>
  )

  rateEmpty = (() => (
    <div className="restauran-comment__empty center rCol topP40 bottomP40">
      <img src={comment_empty} className="i3 bottomP20"></img>
      <div className="restauran-comment__empty-box text-center text14">
        <div className="restauran-comment__empty-title bold bottomP15">تاکنون هیچ نظری درباره این رستوران ارسال نشده است!</div>
        <div className="restauran-comment__empty-desc">از این رستوران سفارش دهید و سپس اولین نفری باشید که بهاین رستوران نظر و امتیاز خواهد داد.
        </div>
      </div>
    </div>
  ))()

  render() {


    return (
      <div className="row padd10">

        <div className="col-6 hCenter">
          <div className="restauran-comment__ratebox flex rCol wFull">
            <div className="flex center bottomP10">
              <span className="text14">سرعت ارسال</span>
              <div className="rightMauto">
                {this.rateStar(3.4)}
              </div>
            </div>
            <div className="flex center">
              <span>کیفیت غذا</span>
              <div className="rightMauto">
                {this.rateStar(4.2)}
              </div>
            </div>
          </div>
        </div>

        <div className="col-6 hCenter">
          <div className="restauran-comment__rateface flex">
            <div className="row">

              {this.rateFace(
                this.state.percentage.start,
                "chilivery-star green",
                "#1CBD2F"
              )}

              {this.rateFace(
                  this.state.percentage.start,
                  "chilivery-smiley-average yellow",
                  "#FFD500"
              )}

              {this.rateFace(
                this.state.percentage.start,
                "chilivery-smiley-bad red",
                "#e1373c"
              )}

            </div>
          </div>
        </div>

        <div className="col-12">
          {this.rateEmpty}
        </div>

      </div>
    );
  }
}


export default TabOne;

