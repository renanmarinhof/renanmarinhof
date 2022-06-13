import axios from "axios";
import BASE_URL from "../constants/url";

export const getMegaResults = (setData) => {
    axios.get(`${BASE_URL}/loterias`)
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {
            alert(err.message)
        })
}

export const getContestResult = (setData) => {
    axios.get(`${BASE_URL}/loterias-concursos`)
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {
            alert(err.message)
        })
}

export const getNumberResult = (setData, id) => {
    axios.get(`${BASE_URL}/concursos/${id}`)
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {
            alert(err.message)
        })
}