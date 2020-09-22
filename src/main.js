import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import HelloWorld from './components/home/HelloWorld.vue'
import Home from './components/home/Home.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
//配置路由
const  router = new VueRouter({
	routes:[
		{path:"/",component:Home},
		{path:"/helloworld",component:HelloWorld},
		],
		mode:"history"
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
