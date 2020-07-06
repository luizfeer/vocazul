<script>
export default {
    data(){
        return {
            value:300,

        }
    }
}
</script>
<template>
<div>

<div class="flex justify-end ">
    <div class="w-4-5 md:w-3/5 bg-white b-0 p-6 rounded-l-lg -mt-24 shadow-sm">
             <div class="">
                <div class="flex justify-between">
                    <div class="info">
                        <div class="text-blue-5 font-bold uppercase">
                        Faça uma simulaçao
                        </div>
                        <div class="text-xl">
                        De quanto você está precisando?
                        </div>
                    </div>
                    <div class=value>
                        <span style="color: #FFCE1A" class="text-lg">R$</span> <span class="text-blue-5 font-bold uppercase text-4xl">{{value}}</span>
                    </div>
                </div>

                <div>
                    <div class="w-full">
                        <div class=" w-full ">
                            <input class="w-full" type="range" min="300" max="3000" step="1" v-model="value">
                        </div>
                        <div class="flex justify-between mt-2 text-xs text-blue-10">
                            <span class="w-8 text-left">$300</span>
                            <span class="w-8 text-right">$3000</span>
                        </div>
                    </div>
                </div> 
                <ul class="font-hairline my-6 text-xs flex justify-between items-center">                    
                    <li class="italic" style="font-size: 11px">* Essa simulação pode variar de acordo com a análise do seu perfil de crédito.</li>
                    <li class="rounded-full py-2 px-4 text-white uppercase text-lg whitespace-no-wrap bg-yellow">Solicitar agora</li>
                </ul>

            </div>
            
        </div>
    </div>
       
</div>
    
</template>
<style scoped>
input[type=range] {  
    outline: none;  
    background-color: #CCC; 
    background-repeat: no-repeat;
    border-radius: 10px;
    cursor: pointer;
    -webkit-appearance: none;
    height: 3px;
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