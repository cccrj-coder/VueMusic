<!-- //数据获取 -->
<template>
    <div>
        <div>
            <MusicListView :musiclist="newMusic"></MusicListView>
        </div>
        
    </div>
</template>
<script>
import MusicListView from './MusicListView.vue'

export default {
    name:'MusicList',
    data() {
        return {
            newMusic: []
        }
    },
    methods:{
        
    },
    created(){
        console.log('123456');
        
        this.$api.getMusicList({
            methods: 'baidu.ting.billboard.billList',
            type: 1,
            size: 6,
            offset: 0
        }).then(res => {
            // console.log(res);
            this.newMusic = res.song_list
        })
    },
    components: {
        MusicListView
    }
}
</script>
<style lang="less" scoped>
    
</style>