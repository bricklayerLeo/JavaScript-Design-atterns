import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import designMode from '@/components/designMode.vue'
import tabs from '@/components/tabs.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/designMode',
      name: 'designMode',
      component: designMode
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: tabs
    }
  ]
})
