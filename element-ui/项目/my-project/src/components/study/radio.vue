<template>
    <div id="hello">
        <!-- 单选框、并且带有边框 -->
        <el-radio v-model="radio" label="1" border>备选项1</el-radio>
        <el-radio v-model="radio" label="2" border>备选项2</el-radio>
        <br><br>
        <!-- 单选框禁用 -->
        <el-radio disabled v-model="radio1" label='禁用'>备选项1</el-radio>
        <el-radio disabled v-model="radio1" label="选中且禁用">备选项2</el-radio>
        <br><br>
        <!-- 单选框组 -->
        <el-radio-group v-model="radio2">
            <el-radio label="1">备选项1</el-radio>
            <el-radio label="2">备选项2</el-radio>
            <el-radio label="3">备选项3</el-radio>
        </el-radio-group>
        <br><br>
        <!-- 按钮样式 -->
        <div>
            <el-radio-group v-model="radio3">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
        </div>
        <div style="margin-top: 20px">
            <el-radio-group v-model="radio4" size="medium">
            <el-radio-button label="上海" ></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
        </div>
        <div style="margin-top: 20px">
            <el-radio-group v-model="radio5" size="small">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="北京" disabled ></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
        </div>
        <div style="margin-top: 20px">
            <el-radio-group v-model="radio6" disabled size="mini">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
        </div>
    </div>
</template>
<script>
export default {
    name:'hello',
    data(){
        return{
            radio:'2',
            radio1:'选中且禁用',
            radio2:'3',
            radio3:'北京',
            radio4:'上海',
            radio5:'广州',
            radio6:'深圳',
        }
    }
}
</script>