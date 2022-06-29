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
        return(
            <li class='tab active'>this.label</li>
        )
    },
    methods:{
        clickTTabHandle(){
            //获取到父级的defaultActiveKey的变化
            this.$parent.updateDefaultKey(this.key)
        }
    },
    mounted(){
        this.$parent.showContent.push(this.$slot.default)
    },
    created(){
        
    },
}
</script>
<style lang="less" scoped>
    
</style>