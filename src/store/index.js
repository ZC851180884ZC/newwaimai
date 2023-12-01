import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList:[],//购物车的数据
    isDelete:true,//确定header组件 点击编辑时 底部组件的展示
    edit:true,// 默认展示编辑的状态
    orderList:[], //pay
    orderListEd:[],//订单  orderList为单次的，在这里concat拼接
    //地址
    userAdress:[
      {
        id: 1001,
        name: 'jason',
        tel: '15874859686',
        province: '广东省',
        city: '深圳市',
        county: '南山区',
        addressDetail: '深圳湾',
        isDefault: true,
        areaCode: '110101',
      },
      {
        id: 1002,
        name: 'allen',
        tel: '15874859685',
        province: '湖北省',
        city: '武汉市',
        county: '武昌区',
        addressDetail: '黄鹤楼',
        isDefault: false,
        areaCode: '110101',
      },
    ],
    // 地址页面 地区的数据
    areaList:
      {
        province_list: {
          110000: "广东省",
          120000: "浙江省",
        },
        city_list: {
          110100: "广州市",
          110200: "深圳市",
          120100: "杭州市",
          120200: "宁波市",
        },
        county_list: {
          110101: "天河区",
          110102: "海珠区",
          120102: "上城区",
          130102: "下城区",
        }
      }
    
  },

  mutations: {
    addcart( state,value){
      state.cartList=value
    },
    //header 编辑切换
    changeDelete( state){
      state.isDelete = !state.isDelete     
    },
    //删除商品
    delete(state,value){
      state.cartList = value
    },
    //编辑的展示
    edit(state){
      state.edit = !state.edit
    },
    //onSubmit提交
    pay(state,value){
      state.orderList = value
    },
    //最终订单
    orderListEd(state){
      state.orderListEd = state.orderListEd.concat(state.orderList)
    },
    //修改地址
    Editadress(state,value){
      state.userAdress = state.userAdress.map((item)=>{
        if(value.isDefault){
          item.isDefault = false
        }
        if(item.id===value.id){
          return value
        }else{
          return item
        }
      })
    },
    //新增地址
    Addadress(state,value){
      state.userAdress.map((item)=>{
        if(value.isDefault){
          item.isDefault = false
        }        
      })
      state.userAdress.push(value)
    },
    //删除地址
    deleteadress(state,value){
      state.userAdress = state.userAdress.filter((item)=>{
        return !(item.id===value.id)
      })
      if(value.isDefault){
        state.userAdress[0].isDefault = true
      }
    }
  },
  actions: {
  },

})
