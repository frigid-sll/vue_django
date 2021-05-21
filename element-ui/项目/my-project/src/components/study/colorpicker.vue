<template>
    <div id="hello">
        <!-- 基础用法 -->
        <div class="block">
            <span class="demonstration">有默认值</span>
            <el-color-picker v-model="color1"></el-color-picker>
        </div>
        <div class="block">
            <span class="demonstration">无默认值</span>
            <el-color-picker v-model="color2"></el-color-picker>
        </div>
    </div>
</template>
<script>
export default {
    name:'hello',
    data(){
        return{
            color1: '#409EFF',
            color2: null
        }
    }
}
</script>