<<<<<<< HEAD
<script>
import { isValidEmail, isValidCPF, isValidMobilePhone } from '@brazilian-utils/brazilian-utils'
import { TheMask } from 'vue-the-mask'
import * as moment from 'moment'

export default {
  components: {
    TheMask
  },
  data () {
    return {
      margin: '0',
      currentStep: 1,
      simulation: true,
      steps: false,
      emprestimo: {
        cpf: '',
        name: '',
        email: '',
        phone: '',
        birthDate: '',
        value: 1500
      },
      validBirthDate: false,
      isValidEmail,
      isValidCPF,
      isValidMobilePhone

    }
  },

  mounted () {
    const header = document.getElementById('header-two')
    this.margin = window.getComputedStyle(header, null).getPropertyValue('margin-right')

    window.onresize = () => {
      this.margin = window.getComputedStyle(header, null).getPropertyValue('margin-right')
      //    le a margin do elemento header para aplicala ao balão de simulação
    }
  },
  methods: {
    next () {
      if (this.currentStep === 1) { // cpf
        if (isValidCPF(this.emprestimo.cpf)) {
          this.currentStep++
        }
      } else if (this.currentStep === 2) { // nome
        if (this.emprestimo.name.length > 4) {
          this.currentStep++
        }
      } else if (this.currentStep === 3) { // email
        if (isValidEmail(this.emprestimo.email)) {
          this.currentStep++
        }
      } else if (this.currentStep === 4) { // celular
        if (isValidMobilePhone(this.emprestimo.phone)) {
          this.currentStep++
        }
      }
    },
    set (param) {
      if (param < this.currentStep) { this.currentStep = param }
      // this.currentStep = param
    },
    send () {
      alert(JSON.stringify(this.emprestimo))
    },
    validBirthDateF () {
      if (this.emprestimo.birthDate.length > 7) {
        const formated = moment(this.emprestimo.birthDate, 'DD/MM/YYYY')
        if (formated.isValid()) {
          const age = moment().diff(formated, 'years')
          if (age >= 18 && age <= 120) {
            this.validBirthDate = true
          } else { this.validBirthDate = false }
        } else { this.validBirthDate = false }
      } else { this.validBirthDate = false }
    },
    changeSteps () {
      if (this.simulation) {
        this.simulation = !this.simulation
        setTimeout(() => { this.steps = !this.steps }, 500)
      } else {
        this.steps = !this.steps
        setTimeout(() => { this.simulation = !this.simulation }, 500)
      }
      // animate delay chahnge
    }
  }
}
</script>
<template>
  <div>
    <div class="flex justify-end ">
      <div class="simulation-bar bg-white b-0 p-6 rounded-l-lg ml-10 -mt-40 sm:-mt-48 md:-mt-48 shadow-md right-0 absolute ">
        <div :style=" 'margin-right:' + margin" class="max-w-full pr-0 ">
          <transition name="fade">
            <div v-if="simulation">
              <!-- bind do style com a margin -->
              <div class=" flex justify-between flex-col sm:flex-row">
                <div class="info max-w-none md:max-w-1/2">
                  <div class="text-blue-5 font-medium text-xs uppercase ">
                    Faça uma simulação
                  </div>
                  <div class="text-2xl title font-medium font-robotoslab">
                    De quanto você está precisando?
                  </div>
                </div>
                <div class="value flex items-end">
                  <span class="text-yellow uppercase leading-10 text-lg pr-1 md:p-0 font-medium">R$</span> <span class="text-blue-5 font-semibold uppercase text-4xl">{{ emprestimo.value }},00</span>
                </div>
              </div>

              <div>
                <div class="w-full">
                  <div class=" w-full ">
                    <input
                      id="range"
                      v-model="emprestimo.value"
                      :style="{ backgroundSize: (emprestimo.value - 300) * 100 / (3000 - 300) + '% 100%'}"
                      class="w-full"
                      type="range"
                      min="300"
                      max="3000"
                      step="50"
                    >
                  </div>
                  <div class="flex justify-between mt-2 text-xs ">
                    <span class="text-left font-gordita" style="color: #095F99">R$300,00</span>
                    <span class="text-right font-gordita" style="color: #095F99">R$3000,00</span>
                  </div>
                </div>
              </div>
              <div class="font-hairline mt-6 text-xs flex flex-col sm:flex-row justify-between items-center">
                <div class="italic max-w-none md:max-w-1/2" style="font-size: 11px">
                  * Essa simulação pode variar de acordo com a análise do seu perfil de crédito.
                </div>
                <a to="#" class="cursor-pointer rounded-full  pt-2 py-1 px-4 text-white uppercase text-lg whitespace-no-wrap bg-yellow mt-3 sm:mt-0 ml-auto hover:opacity-75" @click="changeSteps">Solicitar agora</a>
              </div>
            </div>
          </transition>
          <transition name="fade">
            <div v-show="steps" class="flex justify-between">
              <div>
                <div class="step1 flex justify-center items-center flex-col" @click="set(1)">
                  <div class="step stepcheck rounded-full w-8 h-8 flex justify-center items-center">
                    <p class="text-center text-sm -ml-px cursor-pointer">
                      1
                    </p>
                  </div>
                  <div class="step step1 stepcheck h-4  w-1" />
                </div>

                <div class="flex justify-center items-center flex-col">
                  <div :class="[(currentStep>1) ? 'stepcheck': 'step']" class="rounded-full w-8 h-8 flex justify-center items-center" @click="set(2)">
                    <p class="text-center text-sm -ml-px cursor-pointer">
                      2
                    </p>
                  </div>
                  <div :class="[(currentStep>1) ? 'stepcheck': 'step']" class="step step1 h-4  w-1" />
                </div>

                <div class="flex justify-center items-center flex-col">
                  <div :class="[(currentStep>2) ? 'stepcheck': 'step']" class="rounded-full w-8 h-8 flex justify-center items-center" @click="set(3)">
                    <p class="text-center text-sm -ml-px cursor-pointer">
                      3
                    </p>
                  </div>
                  <div :class="[(currentStep>2) ? 'stepcheck': 'step']" class="step step1 h-4  w-1" />
                </div>

                <div class="flex justify-center items-center flex-col">
                  <div :class="[(currentStep>3) ? 'stepcheck': 'step']" class="rounded-full w-8 h-8 flex justify-center items-center" @click="set(4)">
                    <p class="text-center text-sm -ml-px cursor-pointer">
                      4
                    </p>
                  </div>
                  <div :class="[(currentStep>3) ? 'stepcheck': 'step']" class="step step1 h-4  w-1" />
                </div>

                <div class="flex justify-center items-center flex-col">
                  <div :class="[(currentStep>4) ? 'stepcheck': 'step']" class="rounded-full w-8 h-8 flex justify-center items-center" @click="set(5)">
                    <p class="text-center text-sm -ml-px cursor-pointer">
                      5
                    </p>
                  </div>
                </div>
              </div>

              <div class="flex-grow ml-6 flex justify-between flex-col">
                <div class="info">
                  <div class="text-blue-5 font-medium  text-xs uppercase">
                    Simulação
                  </div>
                  <div class="value flex items-start sm:items-end flex-col sm:flex-row">
                    <span class="">
                      <span class="text-2xl title  font-robotoslab font-medium ">
                        Sua solicitação de empréstimo é de
                      </span>
                      <span class="cursor-pointer p-0 whitespace-no-wrap" @click="changeSteps">
                        <span class="text-yellow uppercase font-medium text-lg">
                          R$
                        </span>
                        <span class="text-blue-5 font-semibold uppercase text-2xl sm:text-3xl">
                          {{ emprestimo.value }},00
                        </span>
                      </span>
                    </span>
                  </div>
                </div>

                <div class="content">
                  <div v-if="currentStep === 1">
                    <div class="flex items-center border-b-2 border-gray-300 py-2">
                      <the-mask
                        id="cpf"
                        v-model="emprestimo.cpf"
                        :mask="['###.###.###-##']"
                        name="cpf"
                        class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Digite seu CPF"
                      />
                    </div>
                    <span v-if="emprestimo.cpf.length > 0 ? !isValidCPF(emprestimo.cpf) : false" class="text-gray-400 italic text-xs">
                      CPF inválido
                    </span>
                  </div>

                  <div v-else-if="currentStep === 2">
                    <div class="flex items-center  border-b-2 border-gray-300 py-2">
                      <input
                        id="name"
                        v-model="emprestimo.name"
                        maxlength="55"
                        class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Nome"
                      >
                    </div>
                    <span v-if="!!emprestimo.name && emprestimo.name.length < 4" class="text-gray-400 italic text-xs">
                      Nome inválido
                    </span>
                  </div>

                  <div v-else-if="currentStep === 3">
                    <div class="flex items-center  border-b-2 border-gray-300 py-2">
                      <input id="email" v-model="emprestimo.email" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" placeholder="Email">
                    </div>
                    <span v-if="emprestimo.email.length > 0 ? !isValidEmail(emprestimo.email) : false" class="text-gray-400 italic text-xs">
                      Email Inválido
                    </span>
                  </div>

                  <div v-else-if="currentStep === 4">
                    <div class="flex items-center  border-b-2 border-gray-300 py-2">
                      <the-mask
                        id="telefone"
                        v-model="emprestimo.phone"
                        :mask="['(##) ####-####', '(##) #####-####']"
                        name="celular"
                        class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Celular"
                      />
                    </div>
                    <span v-if="emprestimo.phone.length > 0 ? !isValidMobilePhone(emprestimo.phone) : false" class="text-gray-400 italic text-xs">
                      Celular Inválido
                    </span>
                  </div>

                  <div v-else-if="currentStep === 5">
                    <div class="flex items-center border-b-2 border-gray-300 py-2">
                      <the-mask
                        id="nascimento"
                        v-model="emprestimo.birthDate"
                        :mask="'##/##/####'"
                        class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Data de Nascimento"
                        @input="validBirthDateF"
                      />
                    </div>
                    <span v-if="!validBirthDate" class="text-gray-400 italic text-xs">
                      Digite uma data de nascimento válida
                    </span>
                  </div>
                </div>

                <a v-show="currentStep < 5" to="#" class="cursor-pointer rounded-full  pt-2 py-1 px-4 text-white uppercase text-lg whitespace-no-wrap bg-yellow mt-3 sm:mt-0 ml-auto hover:opacity-75" @click="next">Avançar</a>
                <a v-show="currentStep === 5" to="#" class="cursor-pointer rounded-full  pt-2 py-1 px-4 text-white uppercase text-lg whitespace-no-wrap bg-yellow mt-3 sm:mt-0 ml-auto hover:opacity-75">Avançar</a>
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
      background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #1CA3EC), color-stop(100%, #1CA3EC));
    background-image: -webkit-linear-gradient(#1CA3EC, #1CA3EC);
    background-image: -moz-linear-gradient(#1CA3EC, #1CA3EC);
    background-image: -o-linear-gradient(#1CA3EC, #1CA3EC);
    background-image: linear-gradient(#1CA3EC, #1CA3EC);
    background-size: 50% 100%;
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
  box-shadow: 0 0 0 7px rgba(41, 169, 255, 0.295);
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
=======
<template>
<div class="flex justify-end ">
    <div class="w-4-5 md:w-3/5 bg-white b-0 p-6 rounded-l-lg -mt-24">
             <div class="">
                <div class="flex justify-between">
                    <div class="info">
                        <div class="text-blue-500 font-bold uppercase">
                        Faça uma simulaçao
                        </div>
                        <div class="text-xl">
                        De quanto você está precisando?
                        </div>
                    </div>
                    <div class=value>
                        <span style="color: #FFCE1A" class="text-lg">R$</span> <span class="text-blue-500 font-bold uppercase text-4xl">1500,00</span>
                    </div>
                </div>

                <div>
                    <div class="w-full">
                        <div class="bg-gray-300 h-2 w-full rounded-full relative">
                            <span class="bg-white h-4 w-4 absolute top-0 -ml-2 -mt-1 z-10 shadow rounded-full cursor-pointer" style="left:50%"></span>
                            <span class="bg-blue-500 h-2 absolute left-0 top-0 rounded-full" style="width:50%"></span>
                        </div>
                        <div class="flex justify-between mt-2 text-xs text-blue-500 ">
                            <span class="w-8 text-left">300</span>
                            <span class="w-8 text-right">3000</span>
                        </div>
                    </div>
                </div> 
                <ul class="font-hairline text-xs flex justify-between items-center">                    
                    <li class="italic" style="font-size: 11px">* Essa simulação pode variar de acordo com a análise do seu perfil de crédito.</li>
                    <li class="rounded-full py-2 px-4 text-white uppercase text-lg whitespace-no-wrap" style="background: #FFCE1A">Solicitar agora</li>
                </ul>

            </div>
            
        </div>
    </div>
</template>
>>>>>>> 205fe8355933416993de80caedcee6f54ce29e31
