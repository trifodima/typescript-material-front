import { FETCH } from '../actions/actionTypes';

const initialState = {
  entity: {},
};

export default function entityReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH.ENTITY.START:
      return {
        ...state, loading: true
      };
    case FETCH.ENTITY.SUCCESS:
      return {
        ...state,
        entity: action.entity,
        loading: false,
      };
    case FETCH.ENTITY.FAIL:
      return {
        ...state, loading: false, error: action.error
      };
    default:
      return state;
  }
}
