<template>
  <div id="app">
    <img src="./assets/Unknown.svg">
    <router-view/>
  </div>
</template>

    <!-- <div id2="app2">
    <img src="./assets/android-applications.png">
    <router-view/>
  </div> -->



<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app2 {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 30px; */
}
</style>
