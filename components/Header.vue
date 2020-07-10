<template>
<div>
<header  class="mx-auto w-screen lg:w-2/2 bg-cover md:pb-0 px-6  bg-no-repeat pt-5 pb-6 bg-right-top bg-size-cover font-gordita">
      <div id="header" class="container p-0 flex flex-col md:justify-between ">
        <Navbar/>
        <Center/>
        <div>

        <div class="bg absolute left-0 ml-72 -mt-20 " >
        <img src="~assets/img/bgr.svg" alt="">
         </div>
         <div class="bg absolute left-0 -mt-20" >
        <img src="~assets/img/bgr.svg" alt="">
         </div>
        </div>
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
.title{
  @apply font-robotoslab
}
.desc{
  color: #979797;
}
 .bg{
    z-index: -1;
  }
 
</style>

