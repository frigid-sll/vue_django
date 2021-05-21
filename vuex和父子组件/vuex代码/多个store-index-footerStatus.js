import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state={
    a:true,
    b:1
};

const getters ={
    isShow(state){
        return state.a
    },
    getB(state){
        return state.b
    }
};

const mutations ={
    show(state){
        state.a=true
    },
    hide(state){
        state.a=false
    },
    newNum(state,num){
        state.b=num
    }
};

const actions={
    hide(context){
        context.commit('hide')
    },
    show(context){
        context.commit('show')
    },
    getNewNum(context,num){
        context.commit('newNum',num)
    }
}

export default{
    namespaced:true,
    state,
    getters,
    mutations,
    actions,
}