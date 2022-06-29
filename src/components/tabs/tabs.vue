<script>
import Content from './content'
export default {
    name: 'Tabs',
    data() {
        return {
            showContent: []
        }
    },
    props:{
        defaultActiveKey:{
            type: String,
            default: '1'
        }
    },
    methods:{
        updataDefaultKey(index){
            this.$emit('callback', index)
        }
    },
    created(){  
        
    },
    render(){
        return(
            <div>
                <ul class='tab-header'> { this.$slots.default }</ul>
                <Content showContent={this.showContent}></Content>
            </div>
        )
    },
    components:{
        Content
    },
}
</script>
<style lang="less" scoped>
    
</style>