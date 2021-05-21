<template>
    <div id="one">
        <first @childFn="parentFn" :msg='message'></first>
        <br/> 
        子组件传来的值 : {{message}}
        <login></login>
    </div>
</template>
<script>
import first from '@/components/child/first'
import login from '@/components/demo/login'
export default {
    name:'one',
    data(){
        return{
            message: 'childFn'
        }
    },
    methods: {
       parentFn(v) {
        this.message = v;
      }
    },
    components:{
        first,
        login
        },
}
</script>