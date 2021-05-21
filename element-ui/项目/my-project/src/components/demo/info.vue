<template>
    <div id="hello">
        <el-upload
           :on-success="handleAvatarSuccess"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
            <img :src="imageUrl">
        </el-upload>
        <button @click="s"></button>
        
    </div>
</template>
<script>
export default {
    name:'hello',
    data(){
        return{
            imageUrl: ''
        }
    },
    methods:{
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        s:function(){
            alert(this.imageUrl)
        }
    }
}
</script>