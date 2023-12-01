<template>
  <div>
    <Header title='账号管理'></Header>
    <div>
      <van-field v-model="value" label="昵称" placeholder="请输入昵称" />
      <van-field v-model="value" label="个性签名" placeholder="个性签名" />
      <van-field v-model="value" label="密码" placeholder="请输入密码" />
    </div>
    <van-button type="primary" color='#ffc400' round block class='save-btn' @click="save">保存</van-button>
    <van-button type="primary" color='#ffc400' round block class='save-btn' @click="logOut">退出登录</van-button>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import {reactive,toRefs} from 'vue'
export default {
  components:{
    Header
  },
  setup(){
    const data = reactive({
      name:"",
      sign:"",
      label:""
    })

    const save = () =>{
      
    }
    const logOut = () =>{

    }
    return {
      ...toRefs(data),
      save,
      logOut
    }
  }

}
</script>

<style lang='less' scoped>

.save-btn {
  width: 80%;
  margin: 20px auto;
}
</style>