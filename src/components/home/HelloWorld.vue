<template>
  <div class="HelloWorld">
    <h1>{{ msg }}</h1>
	helloword
   <ul>
   	<li><router-link to="/">Home</router-link></li>
   	<li><router-link to="/helloworld">helloword</router-link></li>
   </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
