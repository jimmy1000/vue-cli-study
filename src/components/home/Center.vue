<template>
	<div id="Center">
      <!-- <h1>{{ msg }}</h1>	 -->
	  <ul>
	  	<li v-for="user in  users" v-on:click="">
			<h1>{{user.name}}</h1>
			<h2 >{{user.email}}</h2>
		</li>
	  </ul>
	  <button @click="deleteUser()">deleteUser</button>
	</div>	
</template>

<script>
	export default {
	  name: 'Center',
	  props: {
		users:{
			type:Array,
			required:true
		}		
	  },
	  data(){
		  return{
		  }
	  },
	  methods:{
		deleteUser:function(){
		  return	this.users.pop();
		},
	  },
	  computed:{
		}
	}
</script>

<style>
</style>
