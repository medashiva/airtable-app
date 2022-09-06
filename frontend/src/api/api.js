import axios from "axios";

const API = axios.create({
    baseURL: "http://127.0.0.1:5000",
});

API.interceptors.response.use(
    (next) => {
        return Promise.resolve(next);
    },
    (error) => {
        return Promise.reject(error);
    }
);

export async function getOrdersData() {
    const response = await API.get("/orders")
        .then((res) => {
            return res.data;
        })
        .catch(function (error) {
            return Promise.reject(error);
        });
    return response;
}

export default API;