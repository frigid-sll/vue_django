<template>
    <div id="first">
        <input type="text" v-model="message" />
        <button @click="click">Send</button>
        {{msg}}<br>
        {{a}}<br>
        {{b}}
    </div>
</template>
<script>
import {mapState,mapGetters,mapActions} from 'vuex';
export default {
    name:'first',
    data(){
        return{
            message: '我是来自子组件的消息',
            // a:this.$store.getters.isShow,
            // b:this.$store.getters.getB,
            
            c:2
        }
    },
    computed:{
        ...mapGetters('footerStatus',{
            a:'isShow',
            b:'getB',
        })  
    },
    watch:{
        a:function(nvalue,ovalue){
            return nvalue
        }
    },
    methods: {
      click() {
            this.$emit('childFn', this.message);
            // this.$store.commit('hide')
            // this.$store.dispatch('hide')
            this.$store.dispatch('footerStatus/hide')
            // this.a=this.$store.getters.isShow
        }
    },
    props:['msg']
}
</script>