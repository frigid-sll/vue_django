<template>
<div>
    <p class="text-link">这里是父组件传过来的值{{num}}</p>
    控制子组件num的值：
    <button class="test-btn" @click="add">+</button>
    <button class="test-btn" @click="minu">-</button>
    <br>
    控制全部组件num的值：
    <button class="test-btn" @click="add2">+</button>
    <button class="test-btn" @click="minu2">-</button>
</div>
</template>
<script>
export default {
  props:["num"],
  data () {
    return {
        num:10
    }
  },
   methods:{
       add(){
           this.num++
       },
       minu(){
           this.num--
       },
       add2(){
           this.$emit("add");
       },
       minu2(){
           this.$emit("minu");
       }
   }
}
</script>