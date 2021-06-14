import { CHANGE_FILTER } from '../actions/actionTypes';

export default function (filter = 'All', action) {
  switch (action.type) {
    case CHANGE_FILTER: {
      return [
        
      ];
    }  
    default:
      return filter.All;
  }
}
