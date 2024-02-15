<template>
         <section class="text-center">
            <button    @click="GoogleLogin"  class="mt-10 hover:text-blue-700  font-semibold  border rounderd-lg ">Login With Google</button>
        </section>
</template>

<script>
import  firebase  from  "../../utilities/firebase";


   export  default  {
        methods: {
            GoogleLogin() {
                var provider = new firebase.auth.GoogleAuthProvider();
                firebase.auth().signInWithPopup(provider).then(() => {
                    this.$emit("close-login-google");
                });
            } 
        }
   };
</script>