<template>
  <div id="app">
    <!-- <Skills /> -->
    <nav>
      <router-link to='/'>Home</router-link>
      <router-link to='/about'>About</router-link>
    </nav>

    <router-view />
  </div>
</template>

<script>
// import Skills from './components/Skills.vue'

export default {
  name: 'App',
  components: {
    // Skills
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

body {
  background-color: #EEEEEE;
  font-family: 'Montserrat', sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  padding-top: 50px;
  /* align-items: center; */
}
body, html {
  margin: 0;
  height: 100%;
}
#app {
    width: 50%;
}
nav {
  padding: 20px 20px 20px 0;
}

nav a{
  padding: 10px;
  text-decoration: none;
  background: white;
  border-radius: 3px;
  color: blue;
  font-weight: bold;
  margin-right: 15px;
}
</style>
