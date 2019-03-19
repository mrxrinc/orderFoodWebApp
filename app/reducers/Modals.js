// import {
//   OPEN_MODAL,
//   CLOSE_MODAL
// } from '../constants/actionModals';
// const initialState = {
//   modals: [],
// }
// const modals = (state = initialState, action) => {
//   switch (action.type) {
//     case OPEN_MODAL:
//       return {
//         ...state,
//         modals: state.modals.concat(action.obj)
//       };
//       case CLOSE_MODAL:
//       return {
//         ...state,
//         modals: state.modals.concat(action.obj)
//         // modals: state.modals.filter(item => item.id !== action.obj.id),
//       };
//     default:
//       return state;
//   }
// }

// export default modals;

import {
  CLOSE_MODAL,
  OPEN_MODAL,
  SHOW_MODAL
} from '../constants/actionModals';

const modals = (state = {}, action) => {
  switch (action.type) {

      case CLOSE_MODAL:
          return Object.assign({}, state, action.payload);
      case OPEN_MODAL:
          return Object.assign({}, state, action.payload);
      case SHOW_MODAL:
          return Object.assign({}, state, action.payload);
      default:
          return state;
  }
}

export default modals;