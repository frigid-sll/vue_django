//多个js文件
import Vue from 'vue';
import Vuex from 'vuex'
import footerStatus from './modules/footerStatus';
import collection from './modules/collection'
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        footerStatus,
        collection
    }
})


//单个js文件
// import Vue from 'vue';
// import Vuex from 'vuex';
// Vue.use(Vuex);

// const state={
//     a:true,
//     b:1
// };

// const getters ={
//     isShow(state){
//         return state.a
//     },
//     getB(state){
//         return state.b
//     }
// };

// const mutations ={
//     show(state){
//         state.a=true
//     },
//     hide(state){
//         state.a=false
//     },
//     newNum(state,num){
//         state.b=num
//     }
// };

// const actions={
//     hide(context){
//         context.commit('hide')
//     },
//     show(context){
//         context.commit('show')
//     },
//     getNewNum(context,num){
//         context.commit('newNum',num)
//     }
// }

// const store = new Vuex.Store({
//     state,
//     getters,
//     mutations,
//     actions,
// });

// export default store;