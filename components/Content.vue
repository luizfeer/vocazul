<template>
<main class="container pt-56 lg:pt-44 md:px-0 pl-6 pr-0">   
    
    <div class="flex justify-between overflow-x-auto ">
        <ul class="p-2 pr-6 pl-0 min-w-2 md:min-w-1">
            <li class="text-blue-5 uppercase font-bold text-xs ">veja</li>
            <li class="text-2xl title">Como funciona</li>
            <li class="my-3 text-lg desc">Entenda como o Você Azul funciona e não perca tempo, faça agora mesmo uma solicitação de crédito pessoal.</li>
            <li class="rounded-full my-2 p-2 px-4 bg-yellow uppercase w-full text-base text-white text-center font-semibold hover:opacity-75" >
                <nuxt-link to="#">realizar um emprestimo</nuxt-link>
            </li>
        </ul>
        <ul class="bg-white p-6 m-2 rounded-lg shadow-md min-w-2 md:min-w-1 flex flex-col justify-between ">
            <li>
                <img src="~assets/img/tablet.svg" alt="tablet">
            </li>
            <li class="font-bold leading-7 text-2xl text-blue-5">
                Baixe o app ou acesse pelo site
            </li>
             <li class="desc">
                Você pode realizar seu cadastro diretamente pelo site ou baixando o app da Você Azul no seu celular pelo Google Play.
            </li>
        </ul>
        <ul class="bg-white p-6 m-2 rounded-lg shadow-md min-w-2 md:min-w-1 flex flex-col justify-between">
            <li>
            <img src="~assets/img/man.svg" alt="man">
            </li>
             <li class="font-bold leading-7 text-2xl text-blue-5">
              Análise do seu  Perfil
            </li>
             <li class="desc">
                Seu cadastro passa por uma pré-análise bem rapidinha. Onde estaremos determinando o valor máximo do empréstimo.
            </li>
        
        </ul>
        
         <ul class="bg-white  p-6 m-2 rounded-lg shadow-md  min-w-2 md:min-w-1 mr-6 sm:mr-0 flex flex-col justify-between ">
             <li>
            <img src="~assets/img/money.svg" alt="money">
             </li>
              <li class="font-bold leading-7 text-2xl text-blue-5">
               Dinheiro na conta
            </li>
             <li class="desc">
               Depois de tudo pronto, o dinheiro chega rapidinho na sua conta ou no seu cartão pré-pago da Você Azul. É fácil, rápido e seguro!
               </li>
        <div class="bg absolute  ml-68 mt-8" >
        <img src="~assets/img/circle.svg" alt="">
         </div>
        </ul>
        
    </div>
    <div class="bg absolute -ml-20 -mt-8">
        <img src="~assets/img/circle.svg" alt="">
    </div>
    <ul class="about p-8 rounded-lg shadow-md bg-center bg-size-cover bg-cover mt-6 mr-6 sm:mr-0">
         
        <li class="uppercase font-bold text-xs " style="color:#A8E1FF">
            saiba
        </li>
        <li class="text-2xl text-white title">
            Quem somos
        </li>
        <li class="text-white mt-4 tracking-tight">
             A Você Azul nasceu em 2018 com a ideia de facilitar a maneira das pessoas realizarem empréstimos financeiros, que normalmente são carregados de burocracia e papelas.<br> 
            De uma maneira inovadora, a Você Azul disponibiliza um método rápido, fácil e seguro para as pessoas realizarem seus empréstimos. </li>
    </ul>
    <ul class="my-16">
          <li class="text-blue-5 uppercase font-bold text-xs ">nosso</li>
            <li class="text-2xl title">Blog</li>
        <li class="flex justify-between overflow-x-auto md:overflow-x-unset items-stretch mr-0 ">
           <article class="bg-white rounded-lg shadow-md ml-0 m-2 min-w-3/4 md:min-w-80 md:min-w-1/2 lg:min-w-1/5 xl:min-w-1/4 xl:max-w-1/4 flex-col justify-between flex"> 
              
                <div class="">
                    <img src="~assets/img/money.jpg" class="w-full rounded-t-lg" alt="money">
                </div>
                 <div class="leading-7 my-4 mx-6 font-bold text-2xl text-blue-5">
                    O que é empréstimo pessoal
                </div>
                <div class=" mx-6 desc">
                    Muito se fala sobre empréstimo pessoal, entretanto, pouco se fala sobre o que é o empréstimo pessoal.
                </div>
               <div>
                    <div class="border-blue-5 border-t-2 w-8 m-6"></div>
                        <div class="p-6 pt-0 flex items-center">
                        <span class="text-sm mr-3">Leia mais</span><img src="~assets/img/arrow.svg" alt="">
                    </div>
                </div>
            
            

           </article> 
           <article class="bg-white rounded-lg shadow-md m-2 min-w-3/4 md:min-w-80 md:min-w-1/2 lg:min-w-1/5 xl:min-w-1/4 xl:max-w-1/4 flex-col justify-between flex">
                
                <div class="">
                    <img src="~assets/img/tablet.jpg" class="w-full rounded-t-lg" alt="tablet">
                </div>
                 <div class="leading-7 py-4 px-6 font-bold text-2xl text-blue-5">
                    Fundo DI - O que são e como funcionam
                </div>
                <div class="px-6 desc">
                    Dentre os diversos tipos de fundos de investimento disponíveis no mercado, o fundo DI está entre os mais comuns.
                </div>
              <div>
                    <div class="border-blue-5 border-t-2 w-8 m-6"></div>
                        <div class="p-6 pt-0 flex items-center">
                        <span class="text-sm mr-3">Leia mais</span><img src="~assets/img/arrow.svg" alt="">
                    </div>
                </div>
            
            
           </article>
            <article class="bg-white rounded-lg shadow-md m-2 min-w-3/4 md:min-w-80 md:min-w-1/2 lg:min-w-1/5 xl:min-w-1/4 xl:max-w-1/4 flex-col justify-between flex"> 
               
                <div class="">
                    <img src="~assets/img/note.jpg" class="w-full rounded-t-lg" alt="note">
                </div>
                 <div class="leading-7 py-4 px-6 font-bold text-2xl text-blue-5">
                   Quem deve declarar o IR 2020?
                </div>
                <div class="px-6 desc">
                   Governo prorroga prazo de entrega para 30 de junho. Para tirar todas as dúvidas sobre quem precisa e quem não precisa fazer...
                </div>
               <div>
                    <div class="border-blue-5 border-t-2 w-8 m-6"></div>
                        <div class="p-6 pt-0 flex items-center">
                        <span class="text-sm mr-3">Leia mais</span><img src="~assets/img/arrow.svg" alt="">
                    </div>
                </div>
            
           
            </article> 
            <article class="bg-white rounded-lg shadow-md mr-6 sm:mr-0  m-2 min-w-3/4 md:min-w-80 md:min-w-1/2 lg:min-w-1/5 xl:min-w-1/4 xl:max-w-1/4 flex-col justify-between flex">
            
                <div class="">
                    <img src="~assets/img/phone.jpg" class="w-full rounded-t-lg" alt="phone">
                </div>
                 <div class="leading-7 py-4 px-6 font-bold text-2xl text-blue-5">
                    Dicas para seu primeiro empréstimo
                </div>
                <div class="px-6 desc">
                    O primeiro empréstimo pessoal é aquele que nos deixa inseguros e desconfiados, entretanto, o empréstimo pessoal...
                </div>
                <div>
                    <div class="border-blue-5 border-t-2 w-8 m-6"></div>
                        <div class="p-6 pt-0 flex items-center">
                        <span class="text-sm mr-3">Leia mais</span><img src="~assets/img/arrow.svg" alt="">
                    </div>
                </div>
            
            
            </article> 
        </li>

    </ul>
   
 </main>
</template>
<style scoped>
 ul.about {
    background-image: url('../assets/img/fullbanner.svg');
    /* @apply font-light text-white; */
  }
 

</style>