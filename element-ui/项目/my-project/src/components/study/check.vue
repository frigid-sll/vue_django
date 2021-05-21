<template>
    <div id="hello">
        <!-- `checked` 为 true 或 false -->
        <el-checkbox v-model="checked">备选项</el-checkbox>
        <br><br>
        <!-- 禁用 -->
        <el-checkbox v-model="checked1" disabled>备选项1</el-checkbox>
        <el-checkbox v-model="checked2" disabled>备选项</el-checkbox>
        <br><br>
        <!-- 多选框组 -->
        <el-checkbox-group v-model="checkList">
            <el-checkbox label="复选框 A"></el-checkbox>
            <el-checkbox label="复选框 B"></el-checkbox>
            <el-checkbox label="复选框 C"></el-checkbox>
            <el-checkbox label="禁用" disabled></el-checkbox>
            <el-checkbox label="选中且禁用" disabled></el-checkbox>
        </el-checkbox-group>
        <br><br>
        <!-- 全选 -->
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
        <br><br>
        <!-- 可选项目数量的限制 -->
        <el-checkbox-group
            v-model="checkedCities1"
            :min="1"
            :max="2">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
        <br><br>
        <!-- 按钮样式 -->
         <div>
            <el-checkbox-group v-model="checkboxGroup1">
            <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
        </div>
        <div style="margin-top: 20px">
            <el-checkbox-group v-model="checkboxGroup2" size="medium">
            <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
        </div>
        <div style="margin-top: 20px">
            <el-checkbox-group v-model="checkboxGroup3" size="small">
            <el-checkbox-button v-for="city in cities" :label="city" :disabled="city === '北京'" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
        </div>
        <div style="margin-top: 20px">
            <el-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
            <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
        </div>
        <br><br>
        <!-- 带有边框 -->
        <div>
            <el-checkbox v-model="checked3" label="备选项1" border></el-checkbox>
            <el-checkbox v-model="checked4" label="备选项2" border></el-checkbox>
        </div>
        <div style="margin-top: 20px">
            <el-checkbox v-model="checked5" label="备选项1" border size="medium"></el-checkbox>
            <el-checkbox v-model="checked6" label="备选项2" border size="medium"></el-checkbox>
        </div>
        <div style="margin-top: 20px">
            <el-checkbox-group v-model="checkboxGroup5" size="small">
            <el-checkbox label="备选项1" border></el-checkbox>
            <el-checkbox label="备选项2" border disabled></el-checkbox>
            </el-checkbox-group>
        </div>
        <div style="margin-top: 20px">
            <el-checkbox-group v-model="checkboxGroup6" size="mini" disabled>
            <el-checkbox label="备选项1" border></el-checkbox>
            <el-checkbox label="备选项2" border></el-checkbox>
            </el-checkbox-group>
        </div>
    </div>
</template>
<script>
const cityOptions = ['上海', '北京', '广州', '深圳'];
export default {
    name:'hello',
    data(){
        return{
            checkedCities1: ['上海', '北京'],
            checked:true,
            checked1:false,
            checked2:true,
            checkList:['选中且禁用','复选框A'],
            checkAll: true,
            checkedCities: ['上海', '北京'],
            cities: cityOptions,
            isIndeterminate: true,
            checkboxGroup1: ['上海'],
            checkboxGroup2: ['上海'],
            checkboxGroup3: ['上海'],
            checkboxGroup4: ['上海'],
            checked3: true,
            checked4: false,
            checked5: false,
            checked6: true,
            checkboxGroup5: [],
            checkboxGroup6: []
        }
    },
    methods: {
      handleCheckAllChange(e) { 
        this.checkedCities = e ? this.cities: [];  //如果this.checkedCities的值是第一个点击后就变成第二个
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(e) {  
        let checkedCount = e.length;  //获取复选框已选中的个数
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
    }
}
</script>