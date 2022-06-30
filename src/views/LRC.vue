<template>
    <div class="lrcContainer" >
        <div class="lrc" ref="lrc">
                <p v-for="(item,  index) in lrcData" :key="index">{{item}}</p>
        </div>

    </div>
</template>
<script>
export default {
    name: 'LRC',
    data() {
        return {
            lrcData:''
        }
    },
    methods:{
        //对歌词数据进行解析
        filterLRC(values){
            if(!values) return
            var lrc = {}
            //用\n对歌词数据进行切片，获得对应时间戳以及时间戳内的歌词片
            var lyrics = values.split('\n')
            var reg = /\[\d*:\d*(\.|:)\d*]/g
            for(var i = 0; i < lyrics.length; i++){
                //用正则获取时间戳
                var timeRegArr = lyrics[i].match(reg)
                if(!timeRegArr) continue
                //用空串代替切片内的时间戳
                var content = lyrics[i].replace(timeRegArr, '')
                //对时间戳进行解析
                var t = timeRegArr[0]
                var min = parseInt(t.match(/\[\d*/i).toString().slice(1))
                var sec = parseInt(t.match(/\:\d*/i).toString().slice(1))
                var time = min * 60 + sec
                //创建对象存储解析好的歌词  键/值对为 转化好格式的时间/对应时间内的歌词
                lrc[time] = content 
            }
            this.lrcData = lrc 
        }
    },
    created(){
        
    },
    props:{
        id:{
            type: [String, Number],
            required: true
        }
    },
    mounted(){
        this.$api.getLRC({
            id: this.id
        }).then(res => {
            this.filterLRC(res.lrc.lyric)
        })
    },

}
</script>
<style  scoped>
    .active {
    color: red;
}

.lrcContainer {
    width: 100%;
    height: 150px;
    overflow: scroll;
    position: relative;
}

.lrc {
    width: 100%;
    position: absolute;
    top: 0;
}

.lrc-p {
    height: 30px;
    line-height: 30px;
}

.up30 {
    margin-top: -30px;
}
</style>