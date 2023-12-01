<template>
  <div>2222</div>
</template>

<script>
import {useStore} from 'vuex'

export default {
    name:'OrderList',
    mounted() {
      
    },
    setup(){
      let store = useStore()
      return {
        store
      }
    }
}
</script>

<style>

</style>