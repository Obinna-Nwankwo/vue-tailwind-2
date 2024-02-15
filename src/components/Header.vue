<template>
 <nav class="w-full  bg-gradient-to-t from-blue-500 to-blue-400 text-white   flex justify-between  py-5  px-20 items-center  ">
    <p>   
        <router-link  class="mx-3"   v-for="item  in  items"  :key="item.to"  :to="item.to">{{ item.title }}</router-link>
    </p>
       <p>
            <button v-if="isSignedIn"  @click="logOut"   class="ml-5  text-lg  font-semibold  py-3 px-6 border hover:bg-blue-700 rounded-xl">Log Out</button>
            <button v-else   @click="$emit('open-login')"   class="  text-lg  font-semibold  py-3 px-6 border hover:bg-blue-700 rounded-xl">Log In</button>
       </p>

  </nav>
</template>

<script>
import  firebase  from  "../utilities/firebase";
// import  Names   from  "../components/Names.vue";

export default {
    props: ["isSignedIn"],

    data(){
        return {
            items : [
                {title :  "Home",   to :  "/"},
                {title :  "Names",  to :  "igbo-names"},
                { title :  "Markdown",  to  :  "mark-down"},
                { title :  "Calculator", to : "calculator"},
                { title :  "Model",  to :  "reuseable-model"},
                { title :  "Chat",  to  :  "life-chat"},
            ]
        }
    },

    methods : {
        logOut(){
            firebase.auth().signOut();
           
        }
    }

}
</script>

<style>

</style>