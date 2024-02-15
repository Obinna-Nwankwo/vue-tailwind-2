<template>

    <section @click="close"  class="z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-50"></section>

    <div class="absolute inset-0">
        <div class="flex h-full">
            <div class="z-30 m-auto bg-white p-2 rounded shadow-lg w-1/3">
                <div class="p-2 border">
                    <h1 class="text-2xl text-center">Log in</h1>

                    <G00gle  @close-login-google="close"   />
                    <p class="mt-5 text-center">Or</p>

                <form class="px-3  py-10   my-2"  @submit.prevent="submit()">
                    <div  class="my-4">
                        <label >Email or Username</label>
                        <input ref="emailInput"  v-model="email"   class="p-2  w-full shadow-lg border outline-none   ring-1"  placeholder="example@host.com">
                    </div>
                    <div  class="my-4">
                        <label >Password</label>
                        <input  v-model="password"  class="w-full  p-2 shadow-lg border outline-none   ring-1"  type="password"  placeholder="Password">
                    </div>
                    <div class="mt-10">
                        <button class="w-full rounded shadow-lg bg-gradient-to-r from-blue-400 to-blue-500  text-white text-xl font-semibold  py-3 hover:bg-white">
                            <span v-if="!isLoading"> Log In</span>
                             <span v-else>⏳Processing...</span>
                        
                        </button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import firebase  from "../utilities/firebase";
import  Google  from  "../components/Login/Google.vue"


export default  {
    components : {
        Google
    },

    data(){
        return {
            email : "",
            password: "",
            isLoading : false,
        }
    },

    methods : {
        submit(){
            this.isLoading  =  true;

            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
                this.email  =  "";
                this.password  =  "";
                this.isLoading  =  false;
            })
            .catch(() => {
                this.isLoading  =  false;
            })
        }
    },

    close(){
        this.$emit('close-login');
    },

    mounted(){
        this.$refs.emailInput.focus();
    }

};

</script>

<style>

</style>