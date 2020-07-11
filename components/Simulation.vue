<script>


export default {

    data(){
        return {            
            margin: '0',
            step: 1,
            simulation: true,
            steps: false ,
            emprestimo :{
                value:300,
                cpf:'',
                nasc:'',
                name:'',
                email:'',
                phone_numer:''
            }

        }
    },
    methods:{
         next(){
            this.step++;
        },
        set(param){
            // param>this.step ? '' : this.step = param
            this.step = param
        },
        send(){
            alert(JSON.stringify(this.emprestimo))
        },
        changeSteps(){            
                this.simulation = !this.simulation
                setTimeout(()=>{this.steps = !this.steps},550)
                //animate delay chahnge
        }
    },
    mounted() {
         var header = document.getElementById("header-two");
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
   
    <div class="w-4-5 md:w-3/5 bg-white b-0 p-6 rounded-l-lg ml-10 -mt-40 sm:-mt-48 md:-mt-24 shadow-md right-0 absolute ">

             <div class="max-w-full pr-0 " :style="'margin-right:'+ margin"> 
                 <transition name="fade">
                <div v-if="simulation">
                     
                 <!-- bind do style com a margin -->
                    <div class=" flex justify-between flex-col sm:flex-row">
                        <div class="info">
                            <div class="text-blue-5 font-medium  text-sm uppercase">
                            Faça uma simulação 
                        
                            </div>
                            <div class="text-xl title font-medium">
                            De quanto você está precisando?
                            </div>
                        </div>
                        <div class="value flex items-end">
                            <span class="text-yellow uppercase leading-10 text-lg pr-1">R$</span> <span class="text-blue-5 font-semibold uppercase text-4xl">{{emprestimo.value}},00</span>
                        </div>
                    </div>

                    <div>
                        <div class="w-full">
                            <div class=" w-full ">
                                <input class="w-full" type="range" min="300" max="3000" step="1" v-model="emprestimo.value">
                            </div>
                            <div class="flex justify-between mt-2 text-xs ">
                                <span class=" text-blue-10 text-left font-gordita">$300,00</span>
                                <span class="text-blue-10 text-right font-gordita">$3000,00</span>
                            </div>
                        </div>
                    </div> 
                    <div class="font-hairline mt-6 text-xs flex flex-col sm:flex-row justify-between items-center">                    
                        <div class="italic" style="font-size: 11px">* Essa simulação pode variar de acordo com a análise do seu perfil de crédito.</div>
                        <a to="#" @click="changeSteps" class="cursor-pointer rounded-full  pt-2 py-1 px-4 text-white uppercase text-lg whitespace-no-wrap bg-yellow mt-3 sm:mt-0 ml-auto hover:opacity-75">Solicitar agora</a>
                    
                    </div>
                
                 </div>
                  
                 </transition>
                  <transition name="fade">
                 <div  v-show="steps" class="flex justify-between">
                     <div>
                         <div  @click="set(1)" class="step1 flex justify-center items-center flex-col">
                            <div class="step stepcheck rounded-full w-8 h-8 flex justify-center items-center">
                            <p class="text-center text-sm">1</p>
                            </div>
                            <div class="step step1 stepcheck h-3 w-1"></div>
                         </div>

                         <div class="flex justify-center items-center flex-col" >
                            <div @click="set(2)" :class="[(step>1) ?  'stepcheck': 'step']" class="rounded-full w-8 h-8 flex justify-center items-center">
                            <p  class="text-center text-sm">2</p>
                            </div>
                            <div :class="[(step>1) ?  'stepcheck': 'step']" class="step step1 h-3 w-1"></div>
                         </div>

                          <div class="flex justify-center items-center flex-col" >
                            <div @click="set(3)" :class="[(step>2) ?  'stepcheck': 'step']" class="rounded-full w-8 h-8 flex justify-center items-center">
                            <p  class="text-center text-sm">3</p>
                            </div>
                            <div :class="[(step>2) ?  'stepcheck': 'step']" class="step step1 h-3 w-1"></div>
                         </div>

                         <div class="flex justify-center items-center flex-col" >
                            <div @click="set(4)" :class="[(step>3) ?  'stepcheck': 'step']" class="rounded-full w-8 h-8 flex justify-center items-center">
                            <p  class="text-center text-sm">4</p>
                            </div>
                            <div :class="[(step>3) ?  'stepcheck': 'step']" class="step step1 h-3 w-1"></div>
                         </div>

                         <div class="flex justify-center items-center flex-col" >
                            <div @click="set(5)" :class="[(step>4) ?  'stepcheck': 'step']" class="rounded-full w-8 h-8 flex justify-center items-center">
                            <p  class="text-center text-sm">5</p>
                            </div>
                            
                         </div>
                            
                    </div>
                 
                         
                     
                     <div class="flex-grow ml-6 flex justify-between flex-col">
                        <div class="info">
                            <div class="text-blue-5 font-medium  text-sm uppercase">
                            Simulação 
                        
                            </div>
                            <div class="value flex items-start sm:items-end flex-col sm:flex-row">
                                <div class="text-xl title font-medium">
                                    Sua solicitação de empréstimo é de
                                </div>
                                <div class="pl-1">
                                    <span class="text-yellow uppercase font-medium text-lg">R$</span>
                                    <span class="text-blue-5 font-semibold uppercase text-3xl leading-9">{{emprestimo.value}},00</span>
                                </div>
                            </div>
                        </div>                    
                        <div class="content">
                            <div id="1" v-show="step === 1">
                                <div class="flex items-center border-b border-b-2 border-gray-300 py-2">
                                    <input v-model="emprestimo.cpf" id="cpf" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Digite seu CPF" aria-label="Full name">
                                </div>
                            </div>
                            <div id="2" v-show="step === 2">
                                <div class="flex items-center border-b border-b-2 border-gray-300 py-2">
                                    <input v-model="emprestimo.nasc" id="nascimento" v-mask="'##/##/####'" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Data de Nascimento" aria-label="Full name">
                                </div>
                            </div>
                            <div id="3" v-show="step === 3">
                                <div class="flex items-center border-b border-b-2 border-gray-300 py-2">
                                    <input v-model="emprestimo.name" id="name" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Nome" aria-label="Full name">
                                </div>
                            </div>
                            <div id="4" v-show="step === 4">
                                <div class="flex items-center border-b border-b-2 border-gray-300 py-2">
                                    <input v-model="emprestimo.email" id="email" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" placeholder="Email" aria-label="Full name">
                                </div>
                            </div>
                            <div id="5" v-show="step === 5">
                                <div class="flex items-center border-b border-b-2 border-gray-300 py-2">
                                    <input v-model="emprestimo.phone_numer" id="telefone" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Celular" aria-label="Full name">
                                </div>
                            </div>
                        </div>
                        
                             <a to="#" v-show="step < 5" @click="next" class="cursor-pointer rounded-full  pt-2 py-1 px-4 text-white uppercase text-lg whitespace-no-wrap bg-yellow mt-3 sm:mt-0 ml-auto hover:opacity-75">Avançar</a>
                             <a to="#"  v-show="step === 5" @click="send" class="cursor-pointer rounded-full  pt-2 py-1 px-4 text-white uppercase text-lg whitespace-no-wrap bg-yellow mt-3 sm:mt-0 ml-auto hover:opacity-75">Avançar</a>
                            
                         
                    </div>
                    
                  </div>
                  </transition>
            </div>
            
        </div>
    </div>
       
</div>
    
</template>
<style scoped>
.step {
    color: #C4C4C4;
    background-color: #EDEDED;
    @apply cursor-pointer
}
.step p{
    @apply cursor-pointer select-none
}
.stepcheck{
@apply text-white bg-blue-5

}
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