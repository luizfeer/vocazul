<script>
export default {
    data(){
        return {
            value:300,
            margin: '0' 
        }
    },
    mounted() {
         var header = document.getElementById("header");
         this.margin = window.getComputedStyle(header, null).getPropertyValue("margin-right");

         window.onresize = () => {
                     this.margin = window.getComputedStyle(header, null).getPropertyValue("margin-right");
         //    le a margin do elemento header para aplicala ao balão de simulação
         }
    }
}
</script>
<template>
<div>

<div class="flex justify-end ">
   
    <div class="w-4-5 md:w-3/5 bg-white b-0 p-10 rounded-l-lg ml-10 -mt-40 sm:-mt-48 md:-mt-24 shadow-sm right-0 absolute ">

             <div class="max-w-full pr-0 sm:pr-10" :style="'margin-right:'+ margin"> 
                 <!-- bind do style com a margin -->
                <div class="flex justify-between flex-col sm:flex-row">
                    <div class="info">
                        <div class="text-blue-5 font-medium  text-sm uppercase">
                        Faça uma simulação
                      
                        </div>
                        <div class="text-xl title font-medium">
                        De quanto você está precisando?
                        </div>
                    </div>
                    <div class="value flex items-end">
                        <span class="text-yellow uppercase leading-10 text-lg pr-1">R$</span> <span class="text-blue-5 font-semibold uppercase text-4xl">{{value}},00</span>
                    </div>
                </div>

                <div>
                    <div class="w-full">
                        <div class=" w-full ">
                            <input class="w-full" type="range" min="300" max="3000" step="1" v-model="value">
                        </div>
                        <div class="flex justify-between mt-2 text-xs ">
                            <span class=" text-blue-10 text-left font-gordita">$300,00</span>
                            <span class="text-blue-10 text-right font-gordita">$3000,00</span>
                        </div>
                    </div>
                </div> 
                <div class="font-hairline mt-6 text-xs flex flex-col sm:flex-row justify-between items-center">                    
                    <div class="italic" style="font-size: 11px">* Essa simulação pode variar de acordo com a análise do seu perfil de crédito.</div>
                    <nuxt-link to="#" class="rounded-full  pt-2 py-1 px-4 text-white uppercase text-lg whitespace-no-wrap bg-yellow mt-3 sm:mt-0 ml-auto hover:opacity-75">Solicitar agora</nuxt-link>
                   
                </div>

            </div>
            
        </div>
    </div>
       
</div>
    
</template>
<style scoped>
input[type=range] {  
    outline: none;  
    background-color: #F3F3F3; 
    background-repeat: no-repeat;
    border-radius: 10px;
    cursor: pointer;
    -webkit-appearance: none;
    height: 6px;
}

input[type=range]::-webkit-slider-runnable-track {
    box-shadow: none;
    border: none;
    background: transparent;
    -webkit-appearance: none;
}

input[type=range]::-webkit-slider-thumb {
    width: 15px;
    height: 15px;
    border: 0;
    background: #1CA3EC;
    border-radius: 100%;
    box-shadow: 0 0 1px 0px rgba(0,0,0,0.1);
    -webkit-appearance: none;
    transition: all .2s linear;
    -webkit-transition: all .2s linear;
}
input[type=range]::-webkit-slider-thumb:active {
  height: 18px;
  width: 18px;
  box-shadow: 0 0 0 10px rgba(0,0,0,0.1);
}

input[type=range]::slider-runnable-track {
    box-shadow: none;
    border: none;
    background: transparent;
    -webkit-appearance: none;
}

input[type=range]::slider-thumb {
    width: 15px;
    height: 15px;
    border: 0;
    background: #1CA3EC;
    border-radius: 100%;
    box-shadow: 0 2px 1px 0px rgba(0,0,0,0.1);
    -webkit-appearance: none;
    transition: all .2s linear;
    -webkit-transition: all .2s linear;
}
.zero-input[type=range]::-webkit-slider-thumb {
  background: #FFF;
  border: 2px solid #BBB;
}
</style>