<template>
    <div id="hello">
        <!-- 选择日 -->
        <div class="block">
            <span class="demonstration">默认</span>
            <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期">
            </el-date-picker>
        </div>
        <div class="block">
            <span class="demonstration">带快捷选项</span>
            <el-date-picker
            v-model="value2"
            align="right"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions">
            </el-date-picker>
        </div>
        <br><br>
        <!-- 其他日期单位 -->
        <div class="container">
            <div class="block">
                <span class="demonstration">周</span>
                <el-date-picker
                v-model="value1"
                type="week"
                format="yyyy 第 WW 周"
                placeholder="选择周">
                </el-date-picker>
            </div>
            <div class="block">
                <span class="demonstration">月</span>
                <el-date-picker
                v-model="value2"
                type="month"
                placeholder="选择月">
                </el-date-picker>
            </div>
            </div>
            <div class="container">
            <div class="block">
                <span class="demonstration">年</span>
                <el-date-picker
                v-model="value3"
                type="year"
                placeholder="选择年">
                </el-date-picker>
            </div>
            <div class="block">
                <span class="demonstration">多个日期</span>
                <el-date-picker
                type="dates"
                v-model="value4"
                placeholder="选择一个或多个日期">
                </el-date-picker>
            </div>
        </div>
        <br><br>
    </div>
</template>
<script>
export default {
    name:'hello',
    data(){
        return{
            pickerOptions: {
            disabledDate(time) {
                return time.getTime() > Date.now();
            },
            shortcuts: [{
                text: '今天',
                onClick(picker) {
                picker.$emit('pick', new Date());
                }
            }, {
                text: '昨天',
                onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24);
                picker.$emit('pick', date);
                }
            }, {
                text: '一周前',
                onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit('pick', date);
                }
            }]
            },
            value1: '',
            value2: '',
            value3: '',
            value4: ''
        }
    }
}
</script>