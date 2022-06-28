
// import { get } from 'core-js/core/dict'
import {get} from '../utils/request'

const api = {
    // 获取推荐歌单 getRecommend
    getRecommend(){
        return get("/api/recommend/resource")
    },
    //登陆接口
    login(params){
        return get('/api/login/cellphone', params)
        // return get('/api/login')
    },
    //推荐歌曲
    getMusic(){
        return get('/api/personalized/newsong')
    },
    //歌单详情
    getMusicDetails(params){
        return get('/api/playlist/detail', params)
    }
}

export default api