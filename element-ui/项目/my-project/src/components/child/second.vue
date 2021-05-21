<template>
    <div id="hello">
        <h1 style="text-align:center;color:#DCDFE6"><i>Login User</i></h1>
        <el-row type="flex" justify="center">
            <el-col :span="8">
                <el-input placeholder="请输入账号" v-model="account" style="width:300px;" clearable></el-input>
            </el-col>
        </el-row>
        <div style="height:20px"></div>
        <el-row type="flex" justify="center">
            <el-col :span="8">
                <el-input placeholder="请输入密码" v-model="passwd" style="width:300px;" clearable></el-input>
            </el-col>
        </el-row>
        <div style="height:20px"></div>
        <el-row type="flex" justify="center">
            <el-button type="success" size="medium" style="font-size:12px" @click="login">登录</el-button>
        </el-row>
        <el-row type="flex" justify="center">
            <el-button type="success" size="medium" style="font-size:12px" @click="login_django">登录</el-button>
        </el-row>
    </div>
</template>
<script>
import Qs from 'qs'
export default {
    name:'hello',
    data(){
        return{
            account:'',
            passwd:'',
        }
    },
    methods:{
        login:function(){
            this.$router.push({
                path:'/study/switch_',
                query:{
                    account:this.account
                }
            })
        },
        login_django:function(){
            this.axios.post('/api/login/',
					Qs.stringify({  
               			account: this.account,
            		}),
					).then((res)=>{
						if(res.data.code==200){
							alert('登录成功')
							this.$router.replace('/demo/info')
						}else{
							alert('登录失败')
						}		
					})
        }
    }
}
</script>