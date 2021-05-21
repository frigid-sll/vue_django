<template>
    <div id="hello">
        <!-- 基础用法 -->
        <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item.label" :value="item.label" ></el-option>    
        </el-select>
        <br><br>
        <!-- 有禁用选项 -->
        <el-select v-model="value2" placeholder="请选择">
            <el-option v-for="item in options2" :key="item.value" :value="item.value" :disabled="item.disabled"></el-option>
        </el-select>
        <br><br>
        <!-- 可清空单选 -->
        <el-select v-model="value4" placeholder="请选择" clearable="">
            <el-option v-for="item in options" :key="item.value" :value="item.label"></el-option>
        </el-select>
        <br><br>
        <!-- 基础多选 -->
        <el-select v-model="value5" multiple placeholder='请选择'>
            <el-option v-for="item in options" :key="item.value" :value="item.label"></el-option>
        </el-select>
        <el-select v-model="value6" multiple placeholder='请选择'>
            <el-option v-for="item in options" :key="item.value" :value="item.label"></el-option>
        </el-select>
        <br><br>
        <!-- 自定义模板 -->
        <el-select v-model="value6" placeholder="请选择">
            <el-option
                v-for="item in cities"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                <span style="float: left">{{ item.label }}</span>
                <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
            </el-option>
        </el-select>
        <br><br>
        <!-- 分组 -->
        <el-select v-model="value7" placeholder="请选择">
            <el-option-group
            v-for="group in options3"
            :key="group.label"
            :label="group.label">
            <el-option
                v-for="item in group.options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
            </el-option-group>
        </el-select>
        <br><br>
        <!-- 可搜索 -->
        <el-select v-model="value8" filterable placeholder="请选择">
            <el-option
            v-for="item in options4"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
    </div>
</template>
<script>
export default {
    name:'hello',
    data(){
        return{
            options:[{value:'选项一',label:'黄金糕'},{value:'选项二',label:'双皮奶'},{value:'选项三',label:'颗再见'}],
            options2:[{value:'选项一'},{value:'选项二'},{value:'选项三',disabled:true}],
            value:'',
            value2:'',
            value4:'',
            value5:'',
            value6:'',
            cities: [{
                    value: 'Beijing',
                    label: '北京'
                    }, {
                    value: 'Shanghai',
                    label: '上海'
                    }, {
                    value: 'Nanjing',
                    label: '南京'
                    }, {
                    value: 'Chengdu',
                    label: '成都'
                    }, {
                    value: 'Shenzhen',
                    label: '深圳'
                    }, {
                    value: 'Guangzhou',
                    label: '广州'
                    }],
            options3: [{
                    label: '热门城市',
                    options: [{
                        value: 'Shanghai',
                        label: '上海'
                    }, {
                        value: 'Beijing',
                        label: '北京'
                    }]
                    }, {
                    label: '城市名',
                    options: [{
                        value: 'Chengdu',
                        label: '成都'
                    }, {
                        value: 'Shenzhen',
                        label: '深圳'
                    }, {
                        value: 'Guangzhou',
                        label: '广州'
                    }, {
                        value: 'Dalian',
                        label: '大连'
                    }]
                    }],
            value7: '',
            options4: [{
                    value: '选项1',
                    label: '黄金糕'
                    }, {
                    value: '选项2',
                    label: '双皮奶'
                    }, {
                    value: '选项3',
                    label: '蚵仔煎'
                    }, {
                    value: '选项4',
                    label: '龙须面'
                    }, {
                    value: '选项5',
                    label: '北京烤鸭'
                    }],
            value8: ''
        }
    },
    methods:{
        
    }
}
</script>