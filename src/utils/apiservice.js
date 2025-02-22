import axios from "axios";


export const apiClient = axios.create({
    baseURL: "https://fakestoreapi.com",
})

apiClient.interceptors.response.use(
    (res) => {
        return {
            data: res?.data,
            is_success: res?.status ? true : false,
        }

    },
    (error) => {
        console.log(error);
    }
)

let token = localStorage.getItem("access")
apiClient.interceptors.request.use(
    (conf)=>{
        conf.headers.set('Authorization', `Bearer ${token}`)
        console.log(conf);
    return conf        
    },
    (error)=>{
        console.log(error);
    }
)