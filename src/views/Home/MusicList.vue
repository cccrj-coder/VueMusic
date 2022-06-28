<!-- //数据获取 -->
<template>
    <div>
        <div>
            <MusicListView :recommend='recommend'/>
            <MusicRecommend :recommend='musiclist'/>
        </div>
        
    </div>
</template>
<script>
import MusicListView from './MusicListView.vue'
import MusicRecommend from './MusicRecommend.vue'

export default {
    name:'MusicList',
    data() {
        return {
            recommend: [],
            musiclist: [],
        }
    },
    methods:{
        
    },
    mounted(){
        
        this.$api.getRecommend().then(res => {
            this.recommend = res.recommend
        })
        this.$api.getMusic().then(res => {
            this.musiclist = res.musiclist
        })

 
          
    },
    components: {
        MusicListView,
        MusicRecommend
    }
}
</script>
<style lang="less" scoped>
    
</style>