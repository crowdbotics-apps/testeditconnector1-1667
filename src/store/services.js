import axios from "axios"
import {} from "react-native-dotenv"
const testEditCC1 = axios.create({
  baseURL: "https://www.abc.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function testeditcc1_get_pet_ids_read({ ids }) {
  return testEditCC1.get(`/pet/{ids}`, { params: { ids: ids } })
}
function testeditcc1_get_getMango_id_read({ id }) {
  return testEditCC1.get(`/getMango/{id}`, { params: { id: id } })
}
export const apiService = {
  testeditcc1_get_pet_ids_read,
  testeditcc1_get_getMango_id_read
}
