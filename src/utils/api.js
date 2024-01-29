import axios from "axios";

const api = axios.create({
    baseURL: "https://laftel.net/api/", // 기본 URL 설정
    timeout: 1000, // 타임아웃 시간 설정 (ms)
});

// GET 요청
export const getApiData = (endpoint) => {
    return api.get(endpoint)
        .then((response) => response.data)
        .catch((error) => {
            console.error("Error in API GET request:", error);
        });
};

// POST 요청
export const postApiData = (endpoint, data) => {
    return axios.post(endpoint, data) 
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.error(error);
        });
};

