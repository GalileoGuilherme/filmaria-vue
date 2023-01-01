<template>
  <div id="app">
    <HEade/>
    <router-view/>  
  </div>
</template>

<script>
import HEade from './components/Header';
export default {
  name: 'App',
  components:{
    HEade
  }
}
</script>

<style>

</style>