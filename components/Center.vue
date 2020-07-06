<template>
    <div class="center md:flex md:justify-between items-end pt-2">
        <div class="social hidden md:flex">
            <ul class="social-icons">
                <li><img src="~assets/img/fb.svg" alt="Facebook" /></li>
                <li><img src="~assets/img/tt.svg" alt="Twitter" /></li>
                <li><img src="~assets/img/insta.svg" alt="Insta" /></li>
            </ul>
        </div>
        <div class="person hidden md:flex">
            <img src="~assets/img/person.png" alt="">
        </div>
        <div class="consult h-full flex-col justify-end my-4 md:my-2 ">
            <p class="text-3xl uppercase text-left md:text-right text-white md:max-w-md my-4 md:my-2 ">
            Tá querendo sair do vermelho e ficar de bem com a vida?
            </p>
            <!-- bg-white bg-opacity-75 -->
            <ul class="help uppercase text-white rounded-full py-2 px-4 flex justify-between items-center md:float-right my-4 md:my-2 ">
                <li class="mr-4" style="font-size: 16px">Nos podemos te ajudar </li>
                <li class="rounded-full py-2 px-4 bg-yellow" >saiba mais</li>
            </ul>
        </div>
    </div>    
            <!-- <div class="w-4-5 md:w-3/5 absolute right-0 bg-white b-0 p-6 rounded-l-lg -mb-48"> -->
            
    

</template>
<style scoped>
.center{
    height:510px;
}
ul.social-icons li{
    margin: 20px;
}
.help{
    background: rgba(255, 255, 255, 0.15);
}

</style>