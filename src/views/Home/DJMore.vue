<template>
         <div class="list clearfix">
                <div 
                tag="div"
                :to="`/details/${item.id}`"
                class="item"
                v-for='(item,index) in DJRecommend'
                    :key="index"
                    :class="{ 'clear-padding': index%3 !== 1}"
                >
                    <div class="img-warpper" >
                        <img :src="item.picUrl" alt=''/>
                    </div>
                    <div class="main">{{ item.name }}</div>
                    <div class="gray">{{ item.copywriter }}</div>
                    <div class="more" ref="more">{{ more }}</div>
                </div>
            </div>
</template>
<script>

export default {
    name:'DJMore',
    data() {
        return {
            DJRecommend: [],
            hasMore: false,
            more: '加载更多'
        }
    },
    methods:{
        //封装网络请求
        http(){
              this.$api
              .getDjCategory({
                  type: this.$route.params.id
                }).then(res => {
                    this.DJRecommend.push(...res.djRadios)
                    this.hasMore = res.hasMore
                })
        }
    },
    created(){
        
    },
    mounted(){
        this.http()
        const winHeight = document.documentElement.clientHeight
        
        window.addEventListener('scroll', () => {
            //当此元素渲染成功，即存在后
            if(this.$refs.more){
                  let scrollHeight = this.$refs.more.getBoundingClientRect().top
                  //书写节流与防抖
                  if(timer){
                    clearTimeout(timer)
                  }
                  timer = setTimeout(() => {
                      if(winHeight > scrollHeight){
                        //在300ms内不能加载更多次
                        if(this.hasMore){
                            this.http()
                        }else{
                            this.more = '别拉辣，我已经到底了qwq'
                        }

                      } 
                  }, 300)
                  
            }
            //获取元素距离顶部的相对位置
          
        })
    }
}
</script>
<style  scoped>
.collection-block {
    background-color: #f8f8f8;
    padding: 5px 0;
}

.block-padding {
    padding: 10px 17px;
    background-color: #fff;
}

.title {
    display: flex;
    margin: 14px 0 18px;
}

.title h3 {
    flex: 1 1 0%;
    display: block;
    font-weight: 700;
    font-size: 20px;
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