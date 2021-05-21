<template>
    <div id="hello">
        <el-switch
            v-model="value"
            active-color="#13ce66"
            inactive-color="#ff4949">
        </el-switch>
        <span id="s" @click="s">sss</span>
        {{account}}
    </div>
</template>
<script>
export default {
    name:'hello',
    data(){
        return{
            value: 1,
            account:this.$route.query.account
        }
    },
    methods:{
        s:function(e){
            alert(this.value)
        }
    }
}
</script>