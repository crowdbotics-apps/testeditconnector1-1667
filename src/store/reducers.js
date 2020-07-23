import * as types from "./constants"

const initialState = {}

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case types.TESTEDITCC1_GET_PET_IDS_READ:
    case types.TESTEDITCC1_GET_PET_IDS_READ_SUCCEEDED:
    case types.TESTEDITCC1_GET_PET_IDS_READ_FAILED:
    case types.TESTEDITCC1_GET_GET_MANGO_ID_READ:
    case types.TESTEDITCC1_GET_GET_MANGO_ID_READ_SUCCEEDED:
    case types.TESTEDITCC1_GET_GET_MANGO_ID_READ_FAILED:
    default:
      return state
  }
}
