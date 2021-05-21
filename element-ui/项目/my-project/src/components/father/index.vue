<template>
 <div>
    <son v-bind:num="num" v-on:add="icr" v-on:minu="der"></son>
    <p class="text-link">父{{num}}</p>
</div>
</template>
<script>
import son from '@/components/child/son'
export default {
  data () {
       return {
      num:10
    }
  },
  components:{
       son
   },
   methods:{
       icr(){
           this.num++;
       },
       der(){
           this.num--;
       }
   }
}
</script>