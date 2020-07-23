import { put, call, all, spawn } from "redux-saga/effects"
import { apiService } from "./services"
import * as types from "./constants"
function* testeditcc1_get_pet_ids_readWorker(action) {
  try {
    const result = yield call(apiService.testeditcc1_get_pet_ids_read, action)
    yield put(actions.testeditcc1_get_pet_ids_readSucceeded(result))
  } catch (err) {
    yield put(actions.testeditcc1_get_pet_ids_readFailed(err))
  }
}
function* testeditcc1_get_pet_ids_readWatcher() {
  yield takeEvery(
    types.TESTEDITCC1_GET_PET_IDS_READ,
    testeditcc1_get_pet_ids_readWorker
  )
}
function* testeditcc1_get_getMango_id_readWorker(action) {
  try {
    const result = yield call(
      apiService.testeditcc1_get_getMango_id_read,
      action
    )
    yield put(actions.testeditcc1_get_getMango_id_readSucceeded(result))
  } catch (err) {
    yield put(actions.testeditcc1_get_getMango_id_readFailed(err))
  }
}
function* testeditcc1_get_getMango_id_readWatcher() {
  yield takeEvery(
    types.TESTEDITCC1_GET_GET_MANGO_ID_READ,
    testeditcc1_get_getMango_id_readWorker
  )
}
export default function* rootSaga() {
  const sagas = [
    testeditcc1_get_pet_ids_readWatcher,
    testeditcc1_get_getMango_id_readWatcher
  ]
  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      })
    )
  )
}
