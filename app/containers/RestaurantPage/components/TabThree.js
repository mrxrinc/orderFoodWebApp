/* eslint-disable no-console */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/prop-types */
import React from 'react';
// import $ from 'jquery';
import {Link} from 'react-router-dom';

class TabThree extends React.Component {

  //   componentDidMount(){
  //   $(document).ready(function () {
  //     $('#demo').owlCarousel({
  //       rtl: true,
  //       loop: false,
  //       autoplay: true,
  //       margin: 15,
  //       nav: false,
  //       dots: false,
  //       items:1,
  //     });
  //   });
  // }


  render() {
    // let ChiliOwlDemo = [1,2,3,4,5,6]
    // let ChiliOwlDemoItems = ChiliOwlDemo.map((posterItem, i) =>
    //   <div
    //     key={i}
    //     className="item round20"
    //       style={{
    //       backgroundColor:"#4DC7A0",
    //       padding:"1rem",
    //       height:"200px"
    //     }}
    //   >
    //     <h4>{posterItem}</h4>
    //   </div>
    // );
    const {data} = this.props;
    const dataTypeLenght = Object.keys(data.type).length;
    return (
      <div className="row restaurant-detail topP20 bottomP20">
        <div className="col-12 bottomM20">
          <div className="restaurant-detail__type flex center column padd15 boxShadow1 round20 bgWhite">
            <i className="icon chilivery-filter-restaurant-type text30 flex bottomP5"></i>
            <div className="restaurant-detail__type-title flex bottomP5">نوع رستوران</div>
            <div className="restaurant-detail__type-desc flex gray6">
              {
                  
                  Object.keys(data.type).map( (currentItem,i) => {
                    return(
                      <React.Fragment key={i}>
                        <span>{data.type[currentItem].name}</span>
                        { i !== dataTypeLenght - 1 ? <span className="leftP5">,</span>:null }
                      </React.Fragment>
                    )}
                  )
              }
            </div>
          </div>
        </div>

        <div className="col-6">
          <div className="restaurant-detail__item center rightContent padd15 rightP10 leftP5 boxShadow1 round10 bgWhite">
            <i className="icon chilivery-sort-economy text22"></i>
            <div className="restaurant-detail__item-box rightP10">
              <div className="restaurant-detail__type-title bottomP5"> سطح اقتصادی</div>
              <div className="restaurant-detail__type-desc gray6">{data.financialLevel.name}</div>
            </div>
          </div>
        </div>

        <div className="col-6">
          <div className="restaurant-detail__item center rightContent padd15 rightP10 leftP5 boxShadow1 round10 bgWhite">
            <i className="icon chilivery-delivery-time text22"></i>
            <div className="restaurant-detail__item-box rightP10">
              <div className="restaurant-detail__type-title bottomP5">مدت زمان تحویل:</div>
              <div className="restaurant-detail__type-desc gray6">
                {
                  Object.keys(data.deliveryZoneList).map( (currentItem,i) => {
                    // if(data.deliveryZoneList[currentItem].title === data.neighborhood){
                    if(i === 0){
                      return(
                        <React.Fragment key={i}>
                          <span>{data.deliveryZoneList[currentItem].minTime} </span>
                          <span>تا </span>
                          <span>{data.deliveryZoneList[currentItem].maxTime} </span>
                          <span>دقیقه</span>
                        </React.Fragment>
                      )}
                    }
                  )
                }
              </div>
            </div>
          </div>
        </div>

        {!! data.chainData &&
          <div className="col-12">
            <div className="restaurant-detail__more-restaurant center padd15 round20 topM20">
              <i className="icon chilivery-filter-restaurant-type text40 flex"></i>
              <div className="restaurant-detail__item-box rightP10">
                <div className="restaurant-detail__type-title bottomP15">این رستوران دارای شعب دیگری هم می‌باشد.</div>
                <div className="restaurant-detail__type-desc centerText">
                  <Link to={`/chain/${data.chainData.slug}`} className="btn btn-success">مشاهده لیست شعبه‌ها</Link>
                </div>
              </div>
            </div>
          </div>
        }

        {/* <div className="col-12">
          <div className="restaurant-detail__about topM20">
            <h2 className="restaurant-detail__about-title text16 gray6">درباره رستوران</h2>
            <div className="restaurant-detail__about-box topP10">
              <div className="restaurant-detail__about-desc bottomP15">این رستوران دارای شعب دیگری هم می‌باشداین رستوران دارای شعب دیگری هم می‌باشد</div>
            </div>
          </div>
        </div> */}

        {/* <div className="col-12">
          <div className="restaurant-detail__about topM20">
            <h2 className="restaurant-detail__about-title text16 gray6">گالری تصاویر رستوران</h2>
            <div className="restaurant-detail__about-box topP10">
              <div className="restaurant-detail__about-desc bottomP15">
                <div id="demo" className="owl-carousel owl-theme">
                  {ChiliOwlDemoItems}
                </div>
              </div>
            </div>
          </div>
        </div> */}
        
        <div className="col-12">
          <div className="restaurant-detail__about topM20">
            <h2 className="restaurant-detail__about-title text16 gray6">نشانی رستوران</h2>
            <div className="restaurant-detail__about-box topP10">
              <div className="restaurant-detail__about-desc padd15 round20 primaryBg white">{data.address}</div>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="restaurant-detail__time topM20">
            <h2 className="restaurant-detail__time-title text16 gray6">ساعات کاری رستوران</h2>
            <div className="restaurant-detail__time-box topP10">
              {
                Object.keys(data.openingInfo).map((openingInfo,i) =>          
                  <div key={i} className={
                    "restaurant-detail__time-desc checkout-carditem__lbox padd15 bottomM10 round10 flex center" + 
                    (data.openingInfo[openingInfo][0].isToday ? " boxShadow1 bgWhite":"")
                    }
                  >
                    <span className="flex leftItems">{data.openingInfo[openingInfo][0].Day}</span>
                      <ul className="restaurant-detail__item-box flex rightMauto">
                      {data.openingInfo[openingInfo].map( (currentItem,index) => 
                        <li key={index} className="restaurant-detail__time-item flex rightM10">
                          {currentItem.start} - {currentItem.end}
                        </li>
                      )}
                      </ul>
                    </div>
                )
              }
            </div>
          </div>
        </div>

      </div>
    );
  }
}


export default TabThree;

