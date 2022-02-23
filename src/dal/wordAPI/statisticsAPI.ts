import axios from "axios";
import {API_URL} from "../../constants";

const instance = axios.create({
    baseURL: API_URL,
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
})

const statisticsAPI = {
    getStatistics() {
        return instance.get(`/user/${localStorage.getItem('userID')}/statistics`)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    },
    setStatistics() {
        return instance.put(`/user/${localStorage.getItem('userID')}/statistics`, {
            learnedWords: 0,
            optional: {
                hello: 'world'
            }
        })
            .then((res) => {
                console.log(res);
            })
            .catch((res) => {
                console.log(res);
            })
    }
}

export default statisticsAPI