<template>
  <div class="header">
    <van-icon name="arrow-left" class="icon" @click="toBack"/>
    <div>{{ title }}</div>
    <div class="edit" v-if='edit' @click="handleEdit">{{store.state.edit ? '编辑' : "完成"}}</div>
  </div>
</template>

<script>
import { Toast } from 'vant';
import { useRouter } from 'vue-router';
import {useStore} from 'vuex'
export default {
    name:'Header',
    props:['title','edit'],
    setup(){
      const store = useStore()
      const router = useRouter()
      const toBack = () => {
        router.back()
      }
      //编辑
      const handleEdit = () => {
        if(store.state.cartList.length){
          store.commit('edit')
          store.commit('changeDelete')
        }else {
          Toast.fail('请添加商品')
        }
      }
      return {
        toBack,
        handleEdit,
        store
      }
      
    }
    
}
</script>

<style lang="less" scoped>
.header {
    background-color: #fff;
    height: 40px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #d7d7d7;
    .edit {
      font-size: 16px;
      position: absolute;
      right: 15px;
      font-weight: normal;
    }
    .icon {
      position: absolute;
      left: 10px;
    }
  }
</style>