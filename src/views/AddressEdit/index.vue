<template>
    <div>
        <Header :title='address'></Header>
        <van-address-edit
            :area-list="areaList"
            show-delete
            show-set-default
            show-search-result 
            :addressInfo='addressInfo'
            :area-columns-placeholder="['请选择', '请选择', '请选择']"
            @save="onSave"
            @delete="onDelete"
        /> 
    </div>
  
</template>

<script>
import {useStore} from 'vuex'
import {useRoute,useRouter} from 'vue-router'
import {reactive,toRefs,onMounted, computed} from 'vue'
import { Toast } from 'vant'
export default {
    name:'addressEdit',
    setup(){
        const route = useRoute()
        const router = useRouter()
        const store = useStore()
        const data =reactive({
            areaList:{},
            addressInfo:{}
        })
        //修改和新增地址
        const onSave = (content) =>{
            if(route.query.type === 'add'){
                
                store.commit('Addadress',content)
            }else{
                store.commit('Editadress',content)
            }
            Toast('保存成功')
            setTimeout(()=>{
                router.back()
            },1000)

        }
        //删除地址
        const onDelete = (content) =>{
            store.commit('deleteadress',content)
            Toast('删除成功')
            setTimeout(()=>{
                router.back()
            },1000)
        }
        const init = () =>{
            data.areaList = store.state.areaList
        }
        const initEdit = () => {
            store.state.userAdress.forEach(item => {
                if(item.id == route.query.id){
                    data.addressInfo=item
                }
            });
        }
        const address =computed(()=>{
            return route.query.type === 'edit' ? '修改地址' : '新增地址'
        })
        onMounted(()=>{           
           init()
           initEdit()
        })
        return {
            store,
            ...toRefs(data),
            onSave,
            onDelete,
            address
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
</style>