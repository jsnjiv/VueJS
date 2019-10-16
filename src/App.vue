<template>
  <div id="app">
    <HeaderComponent />
    <router-view/>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'

export default {
  name: 'app',
  components: {
    HeaderComponent
  }
}
</script>

<style>
</style>
