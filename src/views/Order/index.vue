<template>
    <div class="order">
        <Header title='我的订单'></Header>
        <div class="content">
            <van-tabs color='#ffc400'>
                <van-tab :title="item" v-for="(item,index) in navData" :key='index'>
                    <div v-if="item === '全部' && store.state.orderListEd.length">
                        <div v-for="(i,index) in store.state.orderListEd" :key="index" >
                            
                        <van-card
                        :num="i.num"
                        :price="i.price"
                        :title="i.title"
                        :thumb="i.pic"
                    />
                    </div> 
                    </div>
                   
                    <div v-else>
                        <Empty></Empty>
                    </div>
                </van-tab>            
            </van-tabs>

        </div>
         <Footer></Footer>      
            
    </div>
</template>

<script>

import Footer from '@/components/Footer.vue'
import Header from '../../components/Header.vue'
import Empty from '@/components/Empty.vue'
import {useStore} from 'vuex'

import {reactive,toRefs} from 'vue'


export default {
    name:'order',
    components:{
        Footer,
        Header,
        Empty,
        
    },
    mounted(){
       
    },
    setup(){
        const store =  useStore()
        const data = reactive({
            navData: ['全部','交易完成','代付款','代发货','已发货']
        })
        return {
            ...toRefs(data),
            store
        }
    }
}
</script>

<style lang="less" scoped>
.order{
    display: flex;
    flex-flow: column;
    height: 100%;
    .content{
        flex:1;
        overflow: auto;
    }
    
}

</style>