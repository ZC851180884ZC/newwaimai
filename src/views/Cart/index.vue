<template>
    <div class="cart"> 
        <div class="content">
            <Header title="购物车" :edit='true'></Header>
            <CartDetial v-if="isShow" :changeShow="changeShow"></CartDetial>
            <Empty v-else></Empty>
        </div>      
           <Footer></Footer> 
    </div>
</template>

<script>
import Header from '../../components/Header.vue'
import  Empty  from '../../components/Empty.vue';
import Footer from '@/components/Footer.vue'
import CartDetial from './components/CartDetial.vue'
import { useStore } from 'vuex';
import { onMounted ,ref} from 'vue';
export default {
    name:'Home',
    components:{
        Footer,
        Empty,
        Header,
        CartDetial
    },
    setup(){
        const isShow = ref(true)
        const store = useStore()
        const init = () =>{
            if(store.state.cartList.length===0){
                isShow.value = false
            }
        }
        const changeShow = () => {
            isShow.value = false
        }
       onMounted(()=>{
        init()
       })
       return {
        isShow,
        changeShow
       }
    }
}
</script>

<style lang="less" scoped>
.cart{
    display: flex;
    flex-flow: column;
    height: 100%;
    .content{
        flex:1;
        overflow: auto;
    }
}

</style>