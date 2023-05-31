import axios from "axios";

axios.defaults.baseURL = "https://restaurants-reader-backend.onrender.com/";

export const getRestaurants = () => {
    return axios
        .get(`api/restaurants/`).then(result => result.data)
};

export const searchRestaurantById = (id) => {
    return axios
        .get(`api/restaurants/${id}`)
        .then(result => result.data)
}

export const postOrder = (orderDeatails) => {
    return axios
        .post(`order`, orderDeatails)
        .then(result => result.data)
}