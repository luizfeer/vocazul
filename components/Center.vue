<template>
  <div class="center md:flex md:justify-between items-end">
    <div class="social hidden md:flex mb-10">
      <ul class="social-icons">
        <li><img src="~assets/img/fb.svg" alt="Facebook"></li>
        <li><img src="~assets/img/tt.svg" alt="Twitter"></li>
        <li><img src="~assets/img/insta.svg" alt="Insta"></li>
      </ul>
    </div>
    <figure class="person hidden md:flex">
      <img src="~assets/img/person.png" alt="">
    </figure>
    <div class="consult h-full flex flex-col my-4 md:pt-20 ">
      <p class="text-3xl uppercase text-left md:text-right text-white font-bold md:max-w-md my-4 md:my-2 ">
        Tá querendo sair do vermelho e ficar de bem com a vida?
      </p>
      <!-- bg-white bg-opacity-75 -->
      <div class="hidden help uppercase text-white rounded-full justify-between items-center py-2 px-2 sm:py-2 sm:px-4 md:float-right my-4 md:my-2 ">
        <div class="ml-2 text-xs sm:text-sm md:text-base font-bold">
          Nós podemos te ajudar
        </div>
        <nuxt-link to="#" class="rounded-full pt-2 pb-1 px-4 sm:pt-2 sm:pb-2 text-white uppercase text-sm whitespace-no-wrap bg-yellow :mt-0 ml-auto hover:opacity-75">
          saiba mais
        </nuxt-link>
      </div>
    </div>
  </div>
  <!-- <div class="w-4-5 md:w-3/5 absolute right-0 bg-white b-0 p-6 rounded-l-lg -mb-48"> -->
</template>
<style scoped>
.center{
    height:511px;
}
ul.social-icons li{
   @apply mb-4
}
.help{
    background: rgba(255, 255, 255, 0.15);
}

</style>
