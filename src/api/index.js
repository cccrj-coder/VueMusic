
// import { get } from 'core-js/core/dict'
import {get} from '../utils/request'

const api = {
    // 获取推荐歌单 getRecommend
    getRecommend(){
        return get("/api/recommend/resource")
    },
    //登陆接口
    login(params){
        // return get('/api/login/cellphone', params)
        return get('/api/login', params)
    },
    //二维码接口
    // qr(){
    //     return get('/api/qr/key')
    // },
    // //游客登陆
    // anon(){
    //     return get('/api/register/anonimous')
    // },
    //推荐歌曲
    getMusic(){
        return get('/api/personalized/newsong')
    },
    //歌单详情
    getMusicDetails(params){
        return get('/api/playlist/detail', params)
    },
    //播放接口
    getPlayer(params){
        return get('/api/song/url', params)
    }
}

export default api