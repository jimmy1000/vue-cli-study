<template>
  <div id="Home">
	<Header v-on:titleChanged="updateTitle($event)"   v-bind:title="title"></Header>
    <HelloWorld msg="helloword"></HelloWorld>
	<Center v-bind:users='users'></Center>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue'
import Center from './Center.vue'
import Header from './Header.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,
	Center,
	Header
  },
  data(){
	return{
		users:[
		],
		title:"传递一个值,(strig boolean number)"
    }
  },
  created() {
  	this.$http.get("http://jsonplaceholder.typicode.com/users")
		.then((data)=>{
			data.body.show = 1;
			this.users = data.body;
			console.log(this.users);
		})
		
  },
  methods:{
	  updateTitle:function(title){
		  return  this.title = title;
	  }
  }
}
</script>

<style>
</style>
