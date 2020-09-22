<template>
	<div id="Header">
		<h1 v-on:click="changeTitle()">{{title}}</h1>
	</div>
</template>

<script>
	export default {
	  name: 'Header',
	  props: {
		title:{
			type:String,
		}		
	  },
	  data(){
		  return{
		  }
	  },
	  methods:{
		 changeTitle:function(){
			 this.$emit('titleChanged',"子向父组件传值1");
		}
	  },
	  computed:{
		  
		}
	
	}
</script>

<style>
</style>
