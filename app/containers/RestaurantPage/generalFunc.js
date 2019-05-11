import {
  restaurantDetail,
  createBasket,
} from '../../api/application/restaurant';
import Stepper from '../../components/Stepper';
import { show404 } from '../../actions/notFound';

export const fetchBasketFromServer = (id)=>{
  createBasket(id).then((response) => {
    let basketObjItems = response.result.items;
    let basketToArray = Object.key(basketObjItems);
    let basketStoreObjItems = this.props.basket.items;


    if(basketToArray.length > 0){

      if( JSON.stringify(basketObjItems) === JSON.stringify(basketStoreObjItems) ) {
          this.setState({
            basketFromState:basketObjItems,
          })
      }else{
          this.props.setBasketToStore(basketObjItems);
      }


    }else{
      this.setState({
        basketFromState:basketStoreObjItems,
      })
    }

  }).catch((err) => {
    console.log(err)
  });
}

export const postBasketToServer = ()=>{
  
}

unMounted(){
    postStore()
}

INC(){
    setStore()
}

DEC(){
    setStore()
    if(count < 1){
        postStore();
    }
}



Stepper(){
  
  if(props.data.length > 0){
    setcounterFroMStore();

  }else{
    showINC()
    hideDEC()
  }


  onClickAction(){
    if(conter > 0){
      click({
        updateStoreBasket()
      });
    }else{
      removeObject();
      updateStoreBasket()
    }

  }



}













componentDidMount() {

  createBasket(this.state.id).then((response) => {
    console.log('=========createBasket==================');
    console.log(response);
    console.log('====================================');
    let basketObjItems = response.result.items;
    let basketToArray = Object.key(basketObjItems);
    let basketStoreObjItems = this.props.basket.items;


    if(basketToArray.length > 0){

      if( JSON.stringify(basketObjItems) === JSON.stringify(basketStoreObjItems) ) {
          this.setState({
            basketFromState:basketObjItems,
          })
      }else{
          this.props.setBasketToStore(basketObjItems);
      }


    }else{
      this.setState({
        basketFromState:basketStoreObjItems,
      })
    }

  }).catch((err) => {
    console.log(err)
  });

}