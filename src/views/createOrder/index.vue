<template>
    <div class='create-order'>
        <Header title='生成订单'></Header>
        <van-contact-card type="edit" :tel="tel" :name="name" @click="onEdit" />
        <div class="content">
            <div v-for="(item,index) in store.state.orderList" :key="index">
                <van-card
                    :num="item.num"
                    :price="item.price"
                    :title="item.title"
                    :thumb="item.pic"
                />
            </div>
        </div>
        <div class='pay-wrap'> 
            <div class='price'>
                <span>商品金额</span>
                <span>￥{{totalPrice}}</span>
            </div>
            <van-button type="primary" class='pay-btn' block color='#ffc400' @click='handelCreatOrder'>生成订单</van-button>
        </div>
       
    </div>
</template>

<script>
import Header from '@/components/Header'
import { Dialog } from 'vant';
import {reactive,toRefs,onMounted} from 'vue'
import {useStore} from 'vuex'
import {useRouter,useRoute} from 'vue-router'
export default {
    name:'creatOrder',
    components:{
        Header
    },
    setup(){
        const store = useStore()
        const router = useRouter()
        const route = useRoute()
        const data = reactive({
            tel:'17828020935',
            name:'die',
            totalPrice:0
        })
        const onEdit = () => {
            router.push('/address')
        }
        //总金额
        const initPrice = () => {
            let price = 0
            if(store.state.orderList.length){
                store.state.orderList.forEach((item) => {
                    price += item.num * item.price
                });
                data.totalPrice = price
            }     
        }
        //地址
        const initAdress = () => {
            store.state.userAdress.forEach((item)=>{
                if(item.isDefault){
                    data.tel = item.tel
                    data.name = item.name
                }
            })
        }
        //生成订单
        const handelCreatOrder= () =>{
            Dialog({
            title: '提示',
            message: '订单已生成',
            }).then(() => {
                let newList = store.state.cartList.filter((item)=>{
                    return !route.query.list.includes(item.id + '')//id转换为字符串
                })
                store.commit('orderListEd')
                store.commit('delete',newList)
                router.push('/order')
            });
        }
        onMounted(()=>{
            initPrice(),
            initAdress()
        })
        return{
            ...toRefs(data),
            onEdit,
            handelCreatOrder,
            store
        }
    }
}
</script>

<style lang='less' scoped>
.create-order {
  display: flex;
  flex-flow: column;
  height: 100%;
  .content {
    flex: 1;
    overflow-y: auto;
  }
  .pay-wrap {
    padding: 10px 0;
    width: 100%;
    background: #fff;
    border-top: 1px solid #e9e9e9;
    > div {
      display: flex;
      justify-content: space-between;
      padding: 0 5%;
      margin: 10px 0;
      font-size: 14px;
      span:nth-child(2) {
        color: red;
        font-size: 18px;
      }
    }
    .pay-btn {
      width: 90%;
      margin: 0 auto;
    }
  }
}
</style>