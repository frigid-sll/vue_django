<template>
    <div id="hello">
        <!-- 基础用法 -->
        <el-input-number v-model="num1" :min="1" :max="10"></el-input-number>
        <br><br>
        <!-- 禁用状态 -->
        <el-input-number v-model="num2" :disabled="true"></el-input-number>
        <br><br>
        <!-- 步数 -->
        <el-input-number v-model="num3" :step="2" :max="5" :min="0"></el-input-number>
        <br><br>
        <!-- 尺寸 -->
        <el-input-number v-model="num4" size="medium"></el-input-number><br>
        <el-input-number v-model="num5" size="small"></el-input-number><br>
        <el-input-number v-model="num6" size="mini"></el-input-number><br>
        <br><br>
        <!-- 按钮位置 -->
        <el-input-number v-model="num7" controls-position="right"></el-input-number>
    </div>
</template>
<script>
export default {
    name:'hello',
    data(){
        return{
            num1:1,
            num2:1,
            num3:1,
            num4:1,
            num5:1,
            num6:1,
            num7:1,
        }
    }
}
</script>