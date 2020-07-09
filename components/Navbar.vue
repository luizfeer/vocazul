<template>
    <nav class="navbar flex justify-between py-6">
        <div class="logo">
            <img id="image0" width="188" height="35" src="~assets/img/logo.svg">
        </div>

        <div class="menu">
            <div class="expand md:hidden">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 10.5C4.5 11.325 5.175 12 6 12H30C30.825 12 31.5 11.325 31.5 10.5C31.5 9.675 30.825 9 30 9H6C5.175 9 4.5 9.675 4.5 10.5ZM6 27H12C12.825 27 13.5 26.325 13.5 25.5C13.5 24.675 12.825 24 12 24H6C5.175 24 4.5 24.675 4.5 25.5C4.5 26.325 5.175 27 6 27ZM21 19.5H6C5.175 19.5 4.5 18.825 4.5 18C4.5 17.175 5.175 16.5 6 16.5H21C21.825 16.5 22.5 17.175 22.5 18C22.5 18.825 21.825 19.5 21 19.5Z" fill="white" fill-opacity="0.9"/>
                </svg>
            </div>
            <div class="hidden md:flex justify-between self-stretch items-center text-white w-full">
                <nuxt-link to="#" class="mr-6 hover:text-white-75">Como funciona</nuxt-link>
                <nuxt-link to="#" class="mr-6 hover:text-white-75">Quem somos</nuxt-link>
                <nuxt-link to="#" class="mr-6 hover:text-white-75">Blog</nuxt-link>
                <nuxt-link to="#" class="mr-6 hover:text-white-75">Contato</nuxt-link>
                <nuxt-link to="#" class="border-solid border border-white hover:text-white-75  hover:border-white-75 rounded-full py-2 px-4">Login</nuxt-link>
            </div>
        </div>
</nav>
</template>
<style>


</style>