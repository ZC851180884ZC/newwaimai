<template>
    <div class="food-list" v-if="index===0">
         <van-tree-select
            v-model:main-active-index="activeIndex"
            height="88vw"
            :items="items"
            @click-nav="navClick"
            >
            <template #content>
                <div v-for="(item,index) in subItem" :key="index">
                    <ListItem :item="item" :handlerAdd="handlerAdd" :handlerChange="handlerChange"></ListItem>
                </div>                 
            </template>
        </van-tree-select>
    </div>
    <div v-else>
        {{ foodData.content }}
    </div>
   
  
</template>

<script>
import FoodListItem from './FoodListItem.vue'
import ListItem from '../components/FoodListItem.vue'
import { reactive,toRefs } from 'vue'
export default {
    name:'FoodList',
    props:['index','foodData'],
    components:{
        FoodListItem,
        ListItem
    },
    setup(props) {
    let data = reactive({
        activeIndex:0,
        items: [],
        subItem:[]
    })
    //初始化数据
    const initDate=()=>{
        const NewArray =  []
        props.foodData?.items?.forEach((item,index)=>{
            NewArray.push({
                text:item.text
            })
            //subItem是最后一项
            if(data.activeIndex === index){
               data.subItem = item.children 
            }            
        })
        data.items=NewArray
    }
    initDate()

    const navClick =(i)=>{
        data.activeIndex = i
        initDate()
    }
    //购买个数显示与隐藏
    const handlerAdd = (id) =>{
        data.subItem.forEach((item,index)=>{
            if(item.id===id){
               item.add = false ,
               item.num += 1
            }
        })
    }

    //购买数量增加
    const handlerChange = (value,detail)=>{
        data.subItem.forEach((item)=>{
            if(item.id===detail.name){
                item.num=value
            }
        })
        // console.log(data.subItem);
    }

    return {
        ...toRefs(data),
        navClick,
        handlerAdd,
        handlerChange
    }
  },
}
</script>

<style lang="less" scoped>
.food-list {
  margin-top: 20px;
  .item-bg {
    padding: 10px;
  }
  }
  /deep/ .van-tree-select__item--active {
    color: #ffc400;
  }
  /deep/ .van-sidebar-item--select::before {
    background-color: #ffc400;
  }
</style>