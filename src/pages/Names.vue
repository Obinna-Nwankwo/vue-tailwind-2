<template>
    <div>
        <h1 class="text-2xl text-center">Native Names {{ nameCount }}</h1>
        <ul>
            <li class="flex justify-between"  v-for="(name,  index)  in  Names"  :key="name.name">
                <div>
                    {{ name.name }}
                </div>
                <button  @click="removeName(index)">x</button>
            </li>
        </ul>
    <form   class="mt-10"  @submit.prevent="addName">
        <input placeholder="Enter a Name" ref="nameRef"   v-model="newName" class="border rounded">

        <button class="border rounded bg-gradient-to-r from-blue-400 to-blue-500  text-white"  type="submit">Add Name</button>
    </form>
    <small>The total native name in the list is  :  {{ nameCount    }}</small>
    </div>
</template>

<script>
import  { computed, onMounted, ref  } from   "vue";


export default {

    setup(){
        const  nameRef  =  ref("");
        const   newName  = ref("");
        const  Names  =  ref([
            {name: "Nwankwo"},
            {name: "Nwafor"},
            {name: "Chukwuemeka"},
            {name: "Chibuzu"},
        ]);


     function removeName(index) {
        Names.value  =  Names.value.filter((name,  i)  =>  i  != index);
     }


        function addName(){
            if (newName.value !== "") {
                Names.value.push({ name: newName.value });
                newName.value = "";
            }
        };

        onMounted(() =>{
                nameRef.value.focus();
            });

        const  nameCount =  computed({
            get:  ()  =>   Names.value.length ,
        })
        // const nameCount = computed({
        //     get() {
        //          Names.value.length,
        //     }
        // })


     return  { Names,  newName,  removeName,  addName,  nameRef,  nameCount };
    },
  
};
</script>

<style>

</style>