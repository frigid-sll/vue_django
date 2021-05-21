<template>
    <div id="hello">
        <!-- 基础用法 -->
        <div class="block">
            <span class="demonstration">默认不区分颜色</span>
            <el-rate v-model="value1"></el-rate>
            </div>
            <div class="block">
            <span class="demonstration">区分颜色</span>
            <el-rate
                v-model="value2"
                :colors="colors">
            </el-rate>
        </div>
        <br><br>
        <!-- 辅助文字 -->
        辅助文字
        <el-rate
            v-model="value"
            show-text @change="s">
        </el-rate>
    </div>
</template>
<script>
export default {
    name:'hello',
    data(){
        return{
            value: null,
            value1: null,
            value2: null,
            colors: ['#99A9BF', '#F7BA2A', '#FF9900']  // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
        }
    },
    methods:{
        s:function(){
            alert(this.value)
        }
    }
}
</script>