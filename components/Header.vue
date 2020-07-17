<template>
<<<<<<< HEAD
  <div>
    <header id="header" class="mx-auto w-screen lg:w-2/2 bg-cover md:pb-0 px-6  bg-no-repeat pt-5 pb-6 bg-right-top bg-size-cover font-gordita">
      <div id="header-two" class="container p-0 flex flex-col md:justify-between ">
        <Navbar />
        <Center />
        <div>
          <div class="bg hidden sm:block absolute left-0 ml-72 -mt-20 ">
            <img src="~assets/img/bgr.svg" alt="">
          </div>
          <div class="bg hidden sm:block absolute left-0 -mt-20">
            <img src="~assets/img/bgr.svg" alt="">
          </div>
        </div>
        <Simulation />
      </div>
    </header>
    <Content />
    <Footer />
  </div>
</template>
<script>

import Navbar from '~/components/Navbar.vue'
import Center from '~/components/Center.vue'
import Simulation from '~/components/Simulation.vue'
import Content from '~/components/Content.vue'
import Footer from '~/components/Footer.vue'

=======
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
>>>>>>> 205fe8355933416993de80caedcee6f54ce29e31
export default {
  components: {
    Navbar,
    Center,
<<<<<<< HEAD
    Simulation,
    Content,
    Footer
=======
    Simulation
>>>>>>> 205fe8355933416993de80caedcee6f54ce29e31
  }
}

</script>
<style>
header{
<<<<<<< HEAD
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
  .fix{
    position: fixed;
  }

</style>
=======
  background: url('~assets/header.jpg');
  
}

</style>

>>>>>>> 205fe8355933416993de80caedcee6f54ce29e31
