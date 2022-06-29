<script>
export default {
    name: 'Content',
    data() {
        return {
            
        }
    },
    methods:{
        
    },
    created(){
        
    },
    render(){
        return 
        <div>
            {
                this.showContent.map((element, index) =>{
                    return <div> {element.isActive ? element.$slot.default : ''} </div>
                })
            }
        </div>
    },
    props:{
        showContent:{
            type: Array,
            default: function(){
                return []
            }
        }
    }
}
</script>
<style lang="less" scoped>
    
</style>