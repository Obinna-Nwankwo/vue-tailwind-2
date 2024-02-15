<template>
     <section class="flex w-full">
        <div class="m-auto">
            <h1 class="text-2xl my-5">Re-Useable Model</h1>
        
        <Model  v-if="isModelOpen1"   @close="isModelOpen1   =  false" >
            
            <template  #title>
                First  model
            </template>

            <template  #body>
                <p>How are  you doning </p>
            </template>
        </Model>

        <button  @click="isModelOpen1  =  true"  class="border  rounded-lg  shadow-lg px-6  py-3">Open Model 1</button>
        
        <Model  v-if="isModelOpen2"   @close="isModelOpen2   =  false" >
           
           <template  #title> 
            Second  model
           </template>

           <template  #body>
            <p>hello world</p>
           </template>

        </Model>

        <button  @click="isModelOpen2  =  true"  class="border  rounded-lg  shadow-lg px-6  py-3 ml-5">Open Model 2</button>
        </div>
     </section>
</template>

<script>
import  Model  from  "../components/Model.vue";
import  { ref  }  from    "vue";


export default {
    components:{
            Model
        },

        setup(){
            const  isModelOpen1  =  ref(false);
            const  isModelOpen2  =  ref(false);

            return { isModelOpen1,  isModelOpen2 };
        },
        

}
</script>

<style>

</style>