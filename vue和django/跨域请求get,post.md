##### post

```
get_catalogue:function(){
            this.axios.post('/api/acquire/catalogue/',
                            Qs.stringify({  
                                question_classify:this.question_classify,
                                sex:this.sex
                            }),
                            {headers: {'X-CSRFToken': this.getCookie('csrftoken')}}
                            ).then((res)=>{
                                if(res.data.code==200){
                                    this.catalogue_list=res.data.catalogue_list
                                    this.question_count=res.data.question_count
                                    this.solve_question_count=res.data.solve_question_count
                                }else{
                                    alert('获取目录失败')
                                }
                            })
        }
        
getCookie(name) {
                var value = '; ' + document.cookie;
                var parts = value.split('; ' + name + '=');
                if (parts.length === 2) return parts.pop().split(';').shift()
            },
```

##### get

```
get_question_classify:function(){
            this.axios.get('/api/acquire/question_classify/').then((res)=>{
					if(res.data.code==200){
						this.all_question_classify=res.data.res
					}
					}).catch(function(error){
						console.log(error)
					})
        },
```

