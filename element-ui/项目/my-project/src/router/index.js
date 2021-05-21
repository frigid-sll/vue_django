import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/study/layout'
import upload from '@/components/study/upload'
import transfer from '@/components/study/transfer'
import rate from '@/components/study/rate'
import table from '@/components/study/table'

import login from '@/components/demo/login'
import info from '@/components/demo/info'

import one from '@/components/father/one'
import index from '@/components/father/index'

import first from '@/components/child/first'
import second from '@/components/child/second'
import son from '@/components/child/son'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/study/layout',
      name: 'layout',
      component: layout
    },
    {
      path: '/demo/login',
      name: 'login',
      component: login
    },
    {
      path: '/demo/info',
      name: 'info',
      component: info
    },
    {
      path: '/study/upload',
      name: 'upload',
      component: upload
    },
    {
      path: '/study/transfer',
      name: 'transfer',
      component: transfer
    },
    {
      path: '/study/rate',
      name: 'rate',
      component: rate
    },
    {
      path: '/study/table',
      name: 'table',
      component: table
    },
    {
      path: '/father/one',
      name: 'one',
      component: one
    },
    {
      path: '/child/first',
      name: 'first',
      component: first
    },
    {
      path: '/child/second',
      name: 'second',
      component: second
    },
    {
      path: '/child/son',
      name: 'son',
      component: son
    },
    {
      path: '/father/index',
      name: 'index',
      component: index
    }
  ]
})
