<template>
  <p>markdown</p>
</template>

<script>
// import  marked  from  "marked";
import  useDebounce from "../utilities/composition/useDebounce";


export default {
    setup(){
    },
    
    data(){
        return {
            text:  "",
            debounce :  "",
        };
    },

    computed : {
        markedText(){
            return  marked(this.text);
        }
    },
    
    methods :  {
        update(e){
            const  task  =  () =>  (this.text  =  e.target.value);
            this.debounce(task,  500);
        }
    },
    
    mounted(){
        const  { debounce }  =  useDebounce();
        this.debounce  =  debounce;
        this.$refs.markdownTextArea.focus();
    },

};
</script>

<style>

</style>