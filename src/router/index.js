import {createRouter, createWebHistory} from 'vue-router'
const routerHistory = createWebHistory()

const routes = [
    {
        path: '/home',
        
        component: ()=>import('../views/Home')
    },
    {
        path: '/cart',
       
        component: ()=>import('../views/Cart')
    },
    {
        path: '/mine',
       
        component: ()=>import('../views/Mine')
    },
    {
        path: '/order',
        
        component: ()=>import('../views/Order')
    },
    {
        path: '/store',
        
        component: ()=>import('../views/Store')
    },
    {
        path: '/createOrder',
        
        component: ()=>import('../views/createOrder')
    },
    {
        path: '/address',
        
        component: ()=>import('../views/Address')
    },
    {
        path: '/addressEdit',
        
        component: ()=>import('../views/AddressEdit')
    },
    {
        path: '/userinfoedit',
        
        component: ()=>import('../views/userinfoedit')
    },
    {
        path: '/login',
        
        component: ()=>import('../views/login')
    },
    {
        path: '/register',
        
        component: ()=>import('../views/register')
    },
    {
      path: '/',
      redirect:'/home'
      
  },
]

// 创建路由器
const router = createRouter({
    history: routerHistory,
    routes: routes
})


export default router;