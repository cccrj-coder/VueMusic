<template>
    <div>
       <div class="list clearfix">
                <div 
                class="item"
                v-for='(item,index) in recommend'
                    :key="index"
                    :class="{ 'clear-padding': index%3 !== 1}"
                >
                    <div class="img-warpper" >
                        <img :src="item.al.picUrl" alt=''/>
                    </div>
                    <div class="main">{{ item.name }}</div>
                    <!-- <div class="gray">{{ cutString(item.copywriter) }}</div> -->
                </div>
            </div>
    </div>
</template>
<script>
export default {
    name: 'Details',
    data() {
        return {
            detailsDtata: []
        }
    },
    mounted(){

            this.$api.getMusicDetails({
                id: this.$route.params.id
            }).then(res => {
                
        })
    },
    methods:{
        
    },
    created(){
        
    },
}
</script>
<style  scoped>
    
.list {
    width: 100%;
}

.list .item {
    float: left;
    width: 31.33%;
    padding: 0 10px;
    margin-bottom: 10px;
}

.clear-padding {
    padding: 0 !important;
}

.main {
    margin-top: 4px;
    font-size: 12px;
}

.gray {
    font-size: 12px;
    color: #999;
}

.btn-more {
    font-size: 12px;
    text-align: right;
    color: #333;
}
</style>