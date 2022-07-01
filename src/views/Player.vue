<template>
    <div class="play">
        <div class="header">
            <div class="title"> 
                <router-link to="/">
                    <i class="iconfont icon-shouye left"></i>
                </router-link>
                <div class="music-info"> 
                    <p>{{ $route.params.name}}</p>
                </div>
                  <router-link to="/search">
                    <i class="iconfont icon-shouye right"></i>
                </router-link>
            </div>
        </div>
        <div class="song-info">
            <div class="song-info-img"> 
                <img :src="setUrl()" alt="">
            </div>
            <div class="iconbox"> 

            </div>
        </div>
        <div class="song"> 
            <LRC :id='$route.params.id' :currentTime="currentTime" />
            <audio ref="player" controls :src="playerData.url"></audio>
        </div>
    </div>
</template>
<script>

import LRC from './LRC'

export default {
    data() {
        return {
            playerData: {},
            currentTime: 0
        }
    },
    computed:{
        getUrl(){
            return decodeURIComponent(this.$route.params.image)
        }
    },
    beforeDestroy(){
        this.removeEventHandle()
    },
    methods:{

        addEventHandle(){
            this.$refs.player.addEventListener('timeupdate', this.currentTimeHandle)
        },
        removeEventHandle(){
            this.$refs.player.removeEventListener('timeupdate', this.currentTimeHandle)
        },
        //获取音乐播放时长
        //1.音乐总时长
        //2.音乐正在播放的时间节点

        currentTimeHandle(){
                this.currentTime = this.$refs.player.currentTime
        }
    },
    mounted(){
        this.$api.getPlayer({
            id: this.$route.params.id
        }).then(res => {
            this.playerData = res.data[0]
            this.addEventHandle()
        })
 
    },
    created(){
        
    },
    components:{
        LRC
    }

}
</script>
<style scoped>
    
</style>