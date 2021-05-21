1、安装`node.js`，安装完`node.js`之后，`npm`也会自动安装

- `linux`环境

  ```
  $ wget https://nodejs.org/download/release/v6.0.0/node-v6.0.0.tar.gz
  $ tar -zvxf node-v6.0.0.tar.gz
  $ cd node-v6.0.0
  $ ./configure
  $ make 
  $ make install
  
  #升级node版本
  1.产看node版本，没安装的请先安装；
  $ node -v
  
  2.清楚node缓存；
  $ npm cache clean -f
  
  3.安装node版本管理工具'n';
  $ npm install n -g
  
  4.使用版本管理工具安装指定node或者升级到最新node版本；
  $ n stable （安装node最新版本）
  或安装指定版本
  $ n （可以安装node指定版本 sudo n 10.10.0）
  
  5.使用node -v查看node版本，如果版本号改变为你想要的则升级成功。
  ```

- `windows`环境

  - 去`node.js`官网下载



2、安装**`vue`**

- 查询是否安装`node.js`成功的命令：

  ```
  node -v
  
  npm -v
  ```

- 全局安装脚手架工具`vue-cli`，命令如下：

  ```
  #npm下载速度慢，我们将它升级：
  npm install -g cnpm --registry=https://registry.npm.taobao.org
  
  cnpm install --global vue-cli
  ```

- `vue`项目初始化命令如下，若没有安装`webpack`，则先安装`webpack`

  ```
  cnpm install -g webpack
  
  vue init webpack myproject
  ```

  ##### 注：安装过程 中有个选项（`Use ESLint to line your code` ?选择 `No` ）

