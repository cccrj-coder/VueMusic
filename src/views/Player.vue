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
            <LRC :id='$route.params.id' />
            <audio controls :src="playerData.url"></audio>
        </div>
    </div>
</template>
<script>

import LRC from './LRC'

export default {
    data() {
        return {
            playerData: {}
        }
    },
    computed:{
        getUrl(){
            return decodeURIComponent(this.$route.params.image)
        }
    },
    methods:{
        
    },
    mounted(){
        this.$api.getPlayer({
            id: this.$route.params.id
        }).then(res => {
            this.playerData = res.data[0]
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