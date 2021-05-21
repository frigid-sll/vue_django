<template>
    <div id="hello">
        <!-- 基础用法 -->
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <br><br>
        <!-- 禁用状态 -->
        <el-input v-model="input1" placeholder="请输入内容" disabled></el-input>
        <br><br>
        <!-- 可清空 -->
        <el-input placeholder="请输入内容" v-model="input2" clearable></el-input>
        <br><br>
        <!-- 带icon的输入框 -->
        <div class="demo-input-suffix">
            属性方式：
            <el-input
                placeholder="请选择日期"
                suffix-icon="el-icon-date"
                v-model="input2">
            </el-input>
            <el-input
                placeholder="请输入内容"
                prefix-icon="el-icon-search"
                v-model="input21">
            </el-input>
        </div>
        <div class="demo-input-suffix">
            slot 方式：
            <el-input
                placeholder="请选择日期"
                v-model="input22">
                <i slot="suffix" class="el-input__icon el-icon-date"></i>
            </el-input>
            <el-input
                placeholder="请输入内容"
                v-model="input23">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
        </div>
        <br><br>
        <!-- 文本域 -->
        <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea">
        </el-input>
        <br><br>
        <!-- 可自适应文本高度的文本域 -->
        <el-input type="textarea" autosize placeholder="请输入内容" v-model="textarea2"></el-input>
        <div style="margin: 20px 0;"></div>
        <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="textarea3"></el-input>
        <br><br>
        <!-- 复合型输入框 可通过 slot 来指定在 input 中前置或者后置内容。-->
        <div>
            <el-input placeholder="请输入内容" v-model="input3">
                <template slot="prepend">Http://</template>
            </el-input>
        </div>
        <div style="margin-top: 15px;">
            <el-input placeholder="请输入内容" v-model="input4">
                <template slot="append">.com</template>
            </el-input>
        </div>
        <div style="margin-top: 15px;">
            <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
                <el-select v-model="select" slot="prepend" placeholder="请选择">
                <el-option label="餐厅名" value="1"></el-option>
                <el-option label="订单号" value="2"></el-option>
                <el-option label="用户电话" value="3"></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>
        <br><br>
        <!-- 尺寸 可通过 size 属性指定输入框的尺寸，除了默认的大小外，还提供了 large、small 和 mini 三种尺寸。-->
        <div class="demo-input-size">
            <el-input
                placeholder="请输入内容"
                suffix-icon="el-icon-date"
                v-model="input6">
            </el-input>
            <el-input
                size="medium"
                placeholder="请输入内容"
                suffix-icon="el-icon-date"
                v-model="input7">
            </el-input>
            <el-input
                size="small"
                placeholder="请输入内容"
                suffix-icon="el-icon-date"
                v-model="input8">
            </el-input>
            <el-input
                size="mini"
                placeholder="请输入内容"
                suffix-icon="el-icon-date"
                v-model="input9">
            </el-input>
        </div>
    </div>
</template>
<script>
export default {
    name:'hello',
    data(){
        return{
            input:'',
            input1:'',
            input2:'',
            input21: '',
            input22: '',
            input23: '',
            textarea:'',
            textarea2:'',
            textarea3:'',
            input3: '',
            input4: '',
            input5: '',
            select: '',
            input6: '',
            input7: '',
            input8: '',
            input9: ''
        }
    }
}
</script>
<style>
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>