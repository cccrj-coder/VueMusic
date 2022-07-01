<script>
export default {
    name: 'Tab',
    data() {
        return {
            
        }
    },
    props:{
        label:{
            type: String,
            default: 'tab'
        },
        index:{
            type:String,
            default:'1'
        }
    },
    computed:{
      isActive(){
        return this.$parent.defaultActiveKey == this.index
      }   
    },
    render(){
        const classStyle = {
            tab: true,
            active: this.isActive
        }
        return(
            <li onClick={ this.clickHandle } class={ classStyle }>this.label</li>
        )
    },
    methods:{
        clickTabHandle(){
            //获取到父级的defaultActiveKey的变化
            this.$parent.updateDefaultKey(this.key)
        }
    },
    mounted(){
        //似乎有点问题？
        this.$parent.showContent.push(this.$slot.default)
    },
    created(){
        
    },
}
</script>
<style lang="less" scoped>
    
</style>