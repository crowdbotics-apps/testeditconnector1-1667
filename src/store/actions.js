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
