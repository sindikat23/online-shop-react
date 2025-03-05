import axios from "axios";


export const apiClient = axios.create({
    baseURL: "https://dummyjson.com/",
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
        // console.log(conf);
    return conf        
    },
    (error)=>{
        console.log(error);
    }
)

// Fly 001072083, 001072056 
// 001072138
// Fly 001072138. 001072163. 001072056
// 