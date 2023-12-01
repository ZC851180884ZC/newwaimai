<template>
  <div>
    <Header title='我的地址'></Header>
    <van-address-list
      :list="list"  
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
  
  
</template>

<script>
import { reactive,toRefs,onMounted} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import Header from '@/components/Header'
export default {
  component:{
    Header

      },
  setup(){
    const store = useStore()
    const router = useRouter()
    const data = reactive({
      list:[]
    })
    const init = () => {
      data.list = store.state.userAdress.map(item =>{
        return {
          id : item.id,
          name : item.name,
          tel : item.tel,
          address :`${item.province}${item.city}${item.county}${item.addressDetail}`,
          isDefault: item.isDefault,
        }
      })
    }
    const onAdd = () =>{
      router.push({
        path:'/addressEdit',
        query:{
          type: 'add'
        }
      })
    }
    const onEdit = (item) =>{
      router.push({
        path:'/addressEdit',
        query:{
          id:item.id,
          type: 'edit'
        }
      })
    }
    onMounted(()=>{
      init()
    })
    return {
      store,
      ...toRefs(data),
      onAdd,
      onEdit
    }
  }
}
</script>

<style lang='less' scoped>
/deep/ .van-button--danger {
  background-color: #ffc400;
  border-color: #ffc400;
}
/deep/ .van-switch--on {
  background-color: #ffc400;
}
/deep/ .van-radio__icon {
  display: none;
}
</style>