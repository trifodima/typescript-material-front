import { FETCH } from './actionTypes';

export function fetchEntityStart(id) {
  return {
    type: FETCH.ENTITY.START,
    id,
  }
}
export function fetchEntitySuccess(entity) {
  return {
    type: FETCH.ENTITY.SUCCESS,
    entity,
  }
}
export function fetchEntityFailure(error) {
  return {
    type: FETCH.ENTITY.FAIL,
    error,
  }
}
