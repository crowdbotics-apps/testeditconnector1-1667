import * as types from "./constants"
export const testeditcc1_get_pet_ids_read = ids => ({
  type: types.TESTEDITCC1_GET_PET_IDS_READ,
  ids
})

export const testeditcc1_get_pet_ids_readSucceeded = response => ({
  type: types.TESTEDITCC1_GET_PET_IDS_READ_SUCCEEDED,
  response
})

export const testeditcc1_get_pet_ids_readFailed = error => ({
  type: types.TESTEDITCC1_GET_PET_IDS_READ_FAILED,
  error
})
export const testeditcc1_get_getMango_id_read = id => ({
  type: types.TESTEDITCC1_GET_GET_MANGO_ID_READ,
  id
})
export const testeditcc1_get_getMango_id_readSucceeded = response => ({
  type: types.TESTEDITCC1_GET_GET_MANGO_ID_READ_SUCCEEDED,
  response
})
export const testeditcc1_get_getMango_id_readFailed = error => ({
  type: types.TESTEDITCC1_GET_GET_MANGO_ID_READ_FAILED,
  error
})
