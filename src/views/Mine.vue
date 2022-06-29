<template>
    <div>
        <input type="text" v-model='username'>
        <input type="password" v-model='password'>
        <button @click ='loginHandle'>登陆 </button>
        
    </div>
</template>
<script>
export default {
    name: 'Mine',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods:{
        loginHandle(){
            this.$api.login({
                // phone: this.username,
                email: this.username,
                password: this.password
            })


        }
    },
    created(){
        
    },
}
</script>
<style  scoped>
    input{
        border: 1px solid red
    }
</style>