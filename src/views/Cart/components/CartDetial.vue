<template>
  <div class="cartDetail">
    <div class=content>
    <van-checkbox-group v-model="checked" checked-color='#ffc400' @change="groupChange">
      <div v-for="(item,index) in store.state.cartList" :key="index">
        <list-item :item=item :handlerChange="handlerChange" :showCheckBox="true"></list-item>
      </div>
    </van-checkbox-group>
    </div>
    <van-submit-bar :price="allPrice" button-text="提交订单" @submit="onSubmit" class="submit-all" button-color="#ffc400" v-if="store.state.isDelete">
      <van-checkbox v-model="submitChecked" @click="choseAll" checked-color="#ffc400">全选</van-checkbox> 
    </van-submit-bar>
    <div class="buy" v-else>
      <div class="left">
        <van-checkbox v-model="submitChecked" @click="choseAll" checked-color="#ffc400" >全选</van-checkbox> 
      </div>
      <div class="delete" @click="handleDelete">删除</div>
    </div>
  </div>
  
  
</template>

<script>
import { reactive,toRefs,onMounted,computed } from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import ListItem from '../../../components/ListItem.vue'
import { Toast } from 'vant'
export default {
name:'cartDetial',
props:['changeShow'],
components:{
  ListItem
},
setup(props){
  const router = useRouter()
  const store = useStore()
  const data = reactive({
    checked:[],
    submitChecked:true
  })
  const handlerChange = (value,detail) => {
    store.state.cartList.map((item) => {
      if(item.id===detail.name){
        item.num = value
      }
    })
  }
  const init = () => {
    data.checked = store.state.cartList.map((item)=>item.id)
  }
  onMounted(()=>{
    init()
    // console.log(data.checked);
  })
  //提交按钮
  const onSubmit = () => {
    if(data.checked.length){
      store.commit('pay',updateData())
      router.push({
        path:'/createOrder',
        query:{
          list:data.checked
        }
      })
    }else {
      Toast.fail('未选中商品！！！')
    }
    
  }
  //全选框
  const choseAll = () => {   
      if(data.checked.length != store.state.cartList.length){
        init()
      }else {
        data.checked = []
      }
    
  }
  const groupChange = (result) => {
    // console.log(result);
    if(result.length === store.state.cartList.length){
      data.submitChecked = true
    }else {
      data.submitChecked = false
    }
    data.checked =result
  }
//价格计算
  const allPrice = computed(()=>{
    const countList = updateData()
    let sum = 0
    countList.forEach(item => {
      sum += item.price * item.num
    });
    return sum*100
  })
  const updateData = (type) => {
    return store.state.cartList.filter((item)=>{
      return type === 'detele' ?
      !data.checked.includes(item.id) : data.checked.includes(item.id)
    })

  }

  //购物车删除商品
  const handleDelete = () => {
    if(data.checked.length){
      store.commit('delete',updateData('detele'))
      data.checked = []
      //购物车没有商品修改页面
      if(!store.state.cartList.length){
        props.changeShow()
        store.commit('changeDelete')
        store.commit('edit')
      }
      
    }else{
      Toast.fail('请选择删除商品')
    }
  }
  return {
    ...toRefs(data),
    store,
    handlerChange,
    onSubmit,
    choseAll,
    groupChange,
    allPrice,
    handleDelete
  }
}

}
</script>

<style lang="less" scoped>
   .cartDetail {
    font-size: 14px;
    flex: 1;
    position: relative;
    overflow-y: auto;
    padding: 20px 20px 55px;
    .submit-all {
      position: fixed;
      bottom: 48px;
    }

    .buy {
      position: fixed;
      bottom: 48px;
      right: 0;
      display: flex;
      justify-content: space-between;
      width: 100%;
      background-color: #fff;
      border-radius: 10px;
      height: 50px;
      align-items: center;
      padding: 0 16px;
      box-sizing: border-box;
      .left {
        display: flex;
        align-items: center;
      }
      .delete {
        color: #fff;
        background-color: #ffc400;
        border-radius: 20px;
        font-size: 14px;
        font-weight: 600;
        width: 110px;
        height: 40px;
        text-align: center;
        line-height: 40px;
      }
    }

    .content {
      padding: 10px;
      background-color: #fff;
      border-radius: 10px;
    }
  }
</style>