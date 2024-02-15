<template>
  <section class="flex w-full">
    <div class="m-auto">
        <h1 class="text-2xl text-center">Calculator</h1>
        <p class="text-3xl text-right mt-10   w-40 h-10 overflow-x-hiden"  style="direction: rtl;">{{currentNum }}</p>
        <div class="h-5 pb-7">
            <p  class="font-bold"   v-if="selectedOperation">{{ prevNum }}  {{ selectedOperation }}  {{ currentNum }}</p>
        </div>
        <div class=" grid grid-cols-4 gap-1">
            <button @click="pressed('1')"  class="p-2 w-10 h-10 border shadow-lg rounded md">1</button>
            <button @click="pressed('2')"  class="p-2 w-10 h-10 border shadow-lg rounded md">2</button>
            <button @click="pressed('3')"  class="p-2 w-10 h-10 border shadow-lg rounded md">3</button>
            <button @click="pressed('+')" class="p-2 w-10  h-10 border shadow-lg rounded md">+</button>
            <button @click="pressed('4')"  class="p-2 w-10 h-10 border shadow-lg rounded md">4</button>
            <button @click="pressed('5')"  class="p-2 w-10 h-10 border shadow-lg rounded md">5</button>
            <button @click="pressed('6')"  class="p-2 w-10 h-10 border shadow-lg rounded md">6</button>
            <button @click="pressed('*')" class="p-2 w-10 h-10 border shadow-lg rounded md">*</button>
            <button @click="pressed('7')"  class="p-2 w-10 h-10 border shadow-lg rounded md">7</button>
            <button @click="pressed('8')"  class="p-2 w-10 h-10 border shadow-lg rounded md">8</button>
            <button @click="pressed('9')"  class="p-2 w-10 h-10 border shadow-lg rounded md">9</button>
            <button @click="pressed('/')" class="p-2 w-10 h-10 border shadow-lg rounded md">/</button>
            <button @click="pressed('c')" class="p-2 w-10 h-10 border shadow-lg rounded md">C</button>
            <button @click="pressed('0')"  class="p-2 w-10 h-10 border shadow-lg rounded md">0</button>
            <button @click="pressed('=')" class="p-2 w-10 h-10 border shadow-lg rounded md">=</button>
            <button @click="pressed('-')" class="p-2 w-10 h-10 border shadow-lg rounded md">-</button>
        </div>
    </div>
  </section>
</template>

<script>
import  { ref  }  from  "vue";  
import  useWindowEvent  from   "../utilities/composition/useWindowEvent"


export default {
    setup() {
        const currentNum  =  ref("");
        const prevNum  =  ref("");
        const operations  =  ['*',  '+',  '-',  '/'];
        const numbers  =  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
        const selectedOperation  =  ref("");



        function pressed(value) {
            if ( value ===  "="  || value === "Enter") calculate();
            else if (value === "c") clear();
            else if (operations.includes(value)) applyOperation(value);
            else if (numbers.includes(value)) appendNumber(value)
        }

        function appendNumber(value){
            currentNum.value  =  currentNum.value  +  value;
        }

        function applyOperation(value){
            calculate();
            prevNum.value  =  currentNum.value;
            currentNum.value  =  "";

            selectedOperation.value  =  value;
        }

        function calculate(){
            if (selectedOperation.value  ===  "*") multiply();
            else if (selectedOperation.value  ===  "+") add();
            else if (selectedOperation.value  ===  "-") subtract();
            else if (selectedOperation.value  ===  "/") divide();

            prevNum.value  =  "";
            selectedOperation.value  =  "";
        }

        function multiply(){
            currentNum.value  =  prevNum.value  *  currentNum.value;
        }

        function  add(){
            currentNum.value  =  +prevNum.value  +  +currentNum.value;
        }

        function  subtract(){
            currentNum.value  =  prevNum.value  -  currentNum.value;
        }

        function  divide(){
            currentNum.value  =  prevNum.value  /  currentNum.value;
        }

        function  clear(){
            currentNum.value  =  "";
        }

        const  handleKeydown = (e) => pressed(e.key);

        useWindowEvent("keydown", handleKeydown)



        return  { pressed, prevNum,  currentNum,  selectedOperation }
    }
}


</script>

<style>

</style>