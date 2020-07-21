import axios from "axios"
import { TESTEDITCC1_USERNAME, TESTEDITCC1_PASSWORD } from "react-native-dotenv"
const testEditCC1 = axios.create({
  baseURL: "https://www.abc.com",
  auth: { username: TESTEDITCC1_USERNAME, password: TESTEDITCC1_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function testeditcc1_get_pet_ids_read({ ids }) {
  return testEditCC1.get(`/pet/{ids}`, { params: { ids: ids } })
}
export const apiService = { testeditcc1_get_pet_ids_read }
