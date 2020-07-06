<template>
<div>
<header class="max-w-md mx-auto lg:max-w-full md:max-w-full sm:max-w-xl lg:w-2/2 bg-cover md:pb-0  bg-no-repeat bg- pt-8 pb-6 bg-right-top bg-size-cover">
      <div class="content container max-w-screen-xl m-auto h-full flex flex-col md:justify-between p-4 md:p-0">
        <Navbar/>
        <Center/>
        <Simulation/>
        
       
      </div>
        
    </header> 
    <Content/>
    <Footer/>     
</div>
    
      


</template>
<script>


import Navbar from '~/components/Navbar.vue'
import Center from '~/components/Center.vue'
import Simulation from '~/components/Simulation.vue'
import Content from '~/components/Content.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Navbar,
    Center,
    Simulation,
    Content,
    Footer
  }
}

</script>
<style>
header{
  background: url('~assets/img/header.svg');
  height: 620px;
  
}

</style>

