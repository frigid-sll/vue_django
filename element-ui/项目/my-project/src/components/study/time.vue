<template>
    <div id="hello">
        <!-- 固定时间点 -->
        <el-time-select
            v-model="value"
            :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '18:30'
            }"
        placeholder="选择时间">
        </el-time-select>
        <br><br>
        <!-- 任意时间点 -->
        <el-time-picker
            v-model="value1"
            :picker-options="{
            selectableRange: '18:30:00 - 20:30:00'  //控制可调时间段范围 如果没有就是全天的时间
            }"
            placeholder="任意时间点">
        </el-time-picker>
        <el-time-picker
            arrow-control
            v-model="value2"
            :picker-options="{
            selectableRange: '18:30:00 - 20:30:00'   
            }"
            placeholder="任意时间点">
        </el-time-picker>
        <br><br>
        <!-- 固定时间范围，若选择了开始时间，则结束时间内备选项的状态会随之改变 -->
        <el-time-select
            placeholder="起始时间"
            v-model="startTime"
            :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30'
            }">
        </el-time-select>
        <el-time-select
            placeholder="结束时间"
            v-model="endTime"
            :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30',
            minTime: startTime
            }">
        </el-time-select>
        <br><br>
        <!-- 任意时间范围 -->
        <el-time-picker
            is-range
            v-model="value1"
            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            placeholder="选择时间范围">
        </el-time-picker>
        <el-time-picker
            is-range
            arrow-control
            v-model="value2"
            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            placeholder="选择时间范围">
        </el-time-picker>
    </div>
</template>
<script>
export default {
    name:'hello',
    data(){
        return{
            value: '',
            value1: new Date(),
            value2: new Date(),
            startTime: '',
            endTime: '',
            
        }
    }
}
</script>