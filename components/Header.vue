<template>
    <header class="h-140 max-w-md mx-auto lg:max-w-full md:max-w-full sm:max-w-xl lg:w-2/2 bg-cover md:pb-0 bg-auto bg-no-repeat bg-center pt-8 pb-6 bg-right-top bg-size-cover">
      <div class="content container max-w-screen-xl m-auto h-full flex flex-col md:justify-between p-4 md:p-0">
        <Navbar/>
        <Center/>
        <Simulation/>
      </div>
        
    </header>      
      


</template>
<script>


import Navbar from '~/components/Navbar.vue'
import Center from '~/components/Center.vue'
import Simulation from '~/components/Simulation.vue'
export default {
  components: {
    Navbar,
    Center,
    Simulation
  }
}

</script>
<style>
header{
  background: url('~assets/header.jpg');
  
}

</style>

