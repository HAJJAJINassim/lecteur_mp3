<template>
  <div id="app">
    
    <header>
        <componentNav></componentNav>
    </header>

    <main>
      <router-view></router-view>
    </main>
   
  </div>
 
</template>


<style>
 
</style>

<script>

import nav from './components/nav'
export default {
  name: 'App',
  components: {
   'componentNav': nav
  },


}
</script>
