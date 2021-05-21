##### `vue`

```
npm run build
```



##### `django`

- 在`settings.py`中：

  ```
  TEMPLATES = [
      {
          'BACKEND': 'django.template.backends.django.DjangoTemplates',
          'DIRS':['vue/dist'],           #添加你打包的dist
          'APP_DIRS':True,
          'OPTIONS': {
              'context_processors': [
                  'django.template.context_processors.debug',
                  'django.template.context_processors.request',
                  'django.contrib.auth.context_processors.auth',
                  'django.contrib.messages.context_processors.messages',
              ],
          },
      },
  ]
  
  #添加代码
  STATICFILES_DIRS = [
      os.path.join(BASE_DIR, "vue/dist/static"),
  ]
  ```

- 在`urls.py`中

  ```
  from django.contrib import admin
  from django.urls import path,include
  
  from django.views.generic import TemplateView
  
  urlpatterns = [
      path('admin/', admin.site.urls),
      path('api/',include("myapp.urls")),
      path('', TemplateView.as_view(template_name="index.html")),
  
  ]
  ```

  

