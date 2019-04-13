import * as actionTypes from '../actions/actionTypes'
import { getItems } from '../services/items';

let initState = {
  data: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_ITEMS: {
      getItems()
        .then((r) => {
          localStorage.setItem('items', JSON.stringify(r.data))
          return state;
        });
    }
    default: {
      return state
    }
  }
}