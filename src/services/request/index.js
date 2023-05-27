
import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'

class Request {
    constructor(baseURL,timeout){
        this.instance = axios.create({
            baseURL,
            timeout
        })

        // 待完成--请求拦截器的loading效果

        // 使用响应拦截器对数据进行简化
        this.instance.interceptors.response.use((res) => {
            return res.data
        },err => {
            console.log('响应拦截器出错');
            return err

        })
    }

    request(config){
        return this.instance.request(config)
    }

    get(config){
        return this.request({...config,method:"get"})
    }

    post(config){
        return this.request({...config, method:"post"})
    }

}

const request = new Request(BASE_URL,TIMEOUT)

export default request
