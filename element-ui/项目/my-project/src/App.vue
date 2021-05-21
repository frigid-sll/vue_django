<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  html, body, div, h1, h2, h3, h4, h5, h6, ul, ol, dl, li, dt, dd, p, blockquote, pre, form, fieldset, table, th, td, map, figure{margin: 0; padding: 0;}
  h1,h2,h3,h4,h5,h6 { font-weight:normal;font-size:100%; }
  * html,* html body{background-attachment: fixed;}
  ul, ol, dl, li{ list-style: none;}
  pre {white-space: pre-wrap;word-wrap: break-word;}
  h1,h2,h3,h4,h5,h6{font-weight: normal;}
  h3{_zoom: 1;}
  button{font-family:微软雅黑;}
  input,textarea{resize: none; outline: none; font-family:微软雅黑;word-wrap: break-word;}
  fieldset, img{border: 0;}
  legend { display:none; }
  a{text-decoration: none;}
  a:focus{outline: none;}
  em{font-style: normal;}
  html{_overflow-x: hidden;}
  body{ background-color: #fff; font-size: 12px; font-family: 微软雅黑;}
  .clear_f{
    clear: both; overflow:hidden; height:0px;
  }
  ::-webkit-input-placeholder {/* WebKit browsers*/
      color: #bfcfed;
  }
  :-moz-placeholder{/* Mozilla Firefox 4 to 18*/
    color: #bfcfed;
  }
  ::-moz-placeholder{/* Mozilla Firefox 19+*/
    color: #bfcfed;
  }
  :-ms-input-placeholder{/* Internet Explorer 10+*/
    color: #bfcfed !important;
  }
}
</style>
