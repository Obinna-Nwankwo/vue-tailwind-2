<template>

    <section  class="flex  w-full">
        <div class="m-auto">
            <h1 class="text-center text-2xl">Life  Chat</h1>
            <div class="border rounded lg">
                <div class="h-64 p-3">
                    <div v-for="chat   in state. chats "  :key="chat.message">{{ chat.message }}</div>
                </div>

                <div class="h-8 p-3">
                    <input v-model="state.message"   class="px-3  py-1  rounded-lg  shadow-lg"  placeholder="Type....."  @keydown.enter="addMessage">
                </div>
            </div>
        </div>

    </section>
</template>

<script>
import { onMounted,  reactive  } from "vue";
import firebase  from  "../utilities/firebase";



export default {
    setup(){
        const  state  =  reactive({
            chats :  {},
            message : "",
            collection : null,
            // userId  : null,
        });


        onMounted( async () => {
            const   database  =  firebase.database();
            state.collection  =  database.ref("chats");
            const  data  =  await state.collection.once("value");
                // var state.userId = firebase.auth().currentUser.uid;

            state.chats  =  data.val();

            // state.collection.on("value", (snapshot)  => {
            //     state.chats   =  snapshot.val()
            // })
        });

        function addMessage(){
            const newChat  =  state.collection.push();
        
            newChat.set({/*state.userId*/ message :  state.message });
            state.message  =  "";
        }

        return { state,  addMessage  }
    },

};
</script>

<style>

</style>