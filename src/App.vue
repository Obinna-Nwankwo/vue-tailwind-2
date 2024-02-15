<template>


    <Header  :isSignedIn="isSignedIn"   @open-login="isOpen  =  true"  />

    <div class="w-full flex">
    <router-view></router-view>
    </div>
     <Teleport  to="body">
          <LogIn  v-if="isOpen"  @close-login="isSignedIn  =  false"  />
     </Teleport>

</template>

<script>
import  Header  from  "./components/Header.vue";
import  LogIn  from  "./components/LogIn.vue";
import  firebase  from  "./utilities/firebase";

export default {
  data() {
    return {
      isOpen: false,
      isSignedIn: false,
      authUser : {},
    }
  },

  components : { Header,  LogIn },

  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
         this.isSignedIn  =  true;
          this.authUser  =  user;
      } else {
          this.isSignedIn  =  false;
          this.authUser  = {};
      }
    });
  },
};
</script>

<style>

</style>