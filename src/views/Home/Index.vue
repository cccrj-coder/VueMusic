<template>
  <div class="home">
    <MusicList/>
    <MusicTabs/>    
  </div>
</template>
<script>

import MusicList from './MusicListView.vue'
import MusicTabs from './MusicTabs.vue'

export default {
    data() {
        return {
            
        }
    },
    methods:{
        
    },
    created(){
        
    },
    name: 'Home',
    components: {
        MusicList,
        MusicTabs
    }
}
</script>
<style lang="less" scoped>
    
</style>