<template>
    <div>
        <div class="header">
            <a href="/">&lt;</a>
            <!-- <router-link tag="span" to="/">&lt;</router-link> -->
            <!-- <span>&lt;</span> -->
            <h3>更多歌曲</h3>
        </div>
        <div class="list clearfix"> 
                <div 
                class="item"
                v-for='(item,index) in moreDatas'
                    :key="index"
                    :class="{ 'clear-padding': index%3 !== 1}"
                >
                    <div class="img-warpper" >
                        <img :src="item.pic_big" alt=''/>
                    </div>
                    <div class="main">{{ cutString(item.title) }}</div>
                    <div class="gray">{{ cutString(item.author) }}</div>
                </div>
         </div>   
         
         <div ref="loadmore">加载更多 </div>
    </div>

</template>
<script>
export default {
    data() {
        return {
            moreDatas: [],
            offset: 0       
        }
    },
      mounted(){
        this.http(this.offset)

        //添加节流与防抖
        var timer = null
        // 触底加载更多的事件
        const winHeight = document.documentElement.clientHeight
        window.addEventListener("scroll", () =>{
            if(timer){
                clearTimeout(timer)
            }
            timer = setTimeout(() => {
                 if(winHeight > this.$refs.loadmore.getBoundingClientRect().top){
                    this.http(this.offset)
                 }
            }, 300)
          
            
        })

    },
    methods:{
        http(offset){
            this.$api
                .getMusicList({
                    methods: 'baidu.ting.billboard.billList',
                    type: this.$route.params.type,
                    size: 15,
                    offset: offset
                 })
                .then(res => {
                    if(res.song_list){
                        //concat视图不会更新
                        this.moreDatas.push(...res.song_list)
                        this.offset += 15
                    }
                    else{
                        this.$refs.loadmore.innerHtml = '没有更多的数据了......'
                    }

                 
                 })
        },
        cutString(str){
            if(str.length > 8)
            return str.substring(0, 8) + '...'
            else
            return str
        }
    }, 
  
    created(){
        
    },
}
</script>
<style  scoped>
.header{
    width:100%;
    background:#fff ;
    overflow: hidden;
    text-align: center;
    clear:both;
    line-height: 40px;
}
.header a{
    display: block;
    float: left; 
    
   
}
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