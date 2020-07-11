<script>
export default {
    data(){
        return {
            showMenu: false,            
        }
    },
    methods: {
        openMenu(){
            this.showMenu = !this.showMenu
            document.getElementById("header").classList.toggle("fix")
        }
    }
       
}
</script>
<template>
    <nav class="navbar py-6 flex justify-between ">
        <div class="logo">
            <img id="image0" width="188" height="35" src="~assets/img/logo.svg">
        </div>

        <div class="menu">
            <div class="expand md:hidden" @click="openMenu">
                
                <img v-show="!showMenu" height="36" src="~assets/img/menu.svg">
                <img v-show="showMenu" height="36" src="~assets/img/close.svg">
                
            </div>
            <div class="hidden md:flex justify-between self-stretch items-center text-white w-full">
                <nuxt-link to="#" class="mr-6 hover:text-white-75">Como funciona</nuxt-link>
                <nuxt-link to="#" class="mr-6 hover:text-white-75">Quem somos</nuxt-link>
                <nuxt-link to="#" class="mr-6 hover:text-white-75">Blog</nuxt-link>
                <nuxt-link to="#" class="mr-6 hover:text-white-75">Contato</nuxt-link>
                <nuxt-link to="#" class="border-solid border border-white hover:text-white-75  hover:border-white-75 rounded-full py-2 px-4">Login</nuxt-link>
            </div>
            <transition name="fade">
            <div v-show="showMenu" class="menur fixed top-0 left-0 z-10 rounded-tl-lg mt-32 w-screen h-full bg-opacity-75 flex flex-col justify-start items-center text-white">
                <nuxt-link to="#" class="mt-8 hover:text-white-75">Como funciona</nuxt-link>
                <nuxt-link to="#" class="mt-8 hover:text-white-75">Quem somos</nuxt-link>
                <nuxt-link to="#" class="mt-8 hover:text-white-75">Blog</nuxt-link>
                <nuxt-link to="#" class="mt-8 hover:text-white-75">Contato</nuxt-link>
                <nuxt-link to="#" class="mt-8 border-solid border border-white hover:text-white-75  hover:border-white-75 rounded-full py-2 px-4">Login</nuxt-link>
            </div>
            </transition>
        </div>
</nav>
</template>
<style>
.menur{
    background: #095088f5;
    box-shadow: 0px -6px 12px rgba(0, 0, 0, 0.1);
    
}

</style>
