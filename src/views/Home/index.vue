<template>
    <div class="home">
        <div class="content">
            <!-- 头部 -->
            <div class="header">
                <div class="text">外卖</div>
                <div class="location">
                    <van-icon name="location-o" />
                    <span>地址</span>
                    <van-icon name="arrow" />
                </div>
            </div>
            <!-- 中间 -->            
            <div class="main">
                <!-- 搜索框 -->
                <div class="main-bg">
                    <div class="search">
                        <input type="text">
                        <div class="search-text">搜索</div>
                    </div>              
                <!-- 功能排序 -->
                    <div class="sort">
                        <div class="big-sort">
                            <div v-for="(item,index) in big_sort " :key="index">
                                <svg class="icon" aria-hidden="true">
                                    <use :xlink:href="`#${item.icon}`"></use>
                                </svg>
                            {{ item.name }}
                            </div>                       
                        </div>
                        <div class="smart-sort">
                            <div class="small-sort">
                            <div v-for="(item,index) in small_sort " :key="index">
                                <svg class="icon" aria-hidden="true">
                                    <use :xlink:href="`#${item.icon}`"></use>
                                </svg>
                            {{ item.name }}
                            </div>                       
                        </div>
                        </div>
                    </div>
                </div>
                <!-- tab标签 -->
                <van-tabs v-model:active="active">
                    <van-tab :title="item.tab" class="van-tabs" v-for="(item,index) in centent_nav_list" :key="index">
                    <NavList :navList="item.data"></NavList>
                    </van-tab>
                </van-tabs>
               
            </div>
        </div>
           <Footer></Footer> 
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import { reactive,toRefs,ref} from 'vue'
import NavList from './components/NavList.vue'
export default {
    name:'Home',
    components:{
        Footer,
        NavList,
    },

    setup(){
        let data = reactive({           
        big_sort: [
            {
            name: "美食",
            icon: "icon-meishi",
            },
            {
            name: "甜点饮品",
            icon: "icon-tiandian",
            },
            {
            name: "超市便利",
            icon: "icon-chaoshishangpin-bian",
            },
            {
            name: "生鲜果蔬",
            icon: "icon-shengxian-ganju",
            },
            {
            name: "买药",
            icon: "icon-yiyao-yiyaoxiang",
            },
        ],
        small_sort: [
            {
            name: "午餐",
            icon: "icon-wucan",
            },
            {
            name: "买酒",
            icon: "icon-jiu",
            },
            {
            name: "新鲜水果",
            icon: "icon--",
            },
            {
            name: "汉堡披萨",
            icon: "icon-hanbao",
            },
            {
            name: "休闲饮品",
            icon: "icon-yinliao",
            },
            {
            name: "夜宵",
            icon: "icon-yexiao",
            },
            {
            name: "吐司",
            icon: "icon-tusi",
            },
            {
            name: "跑腿",
            icon: "icon-renwuhuifan",
            },
            {
            name: "美人佳丽",
            icon: "icon-meirong",
            },
            {
            name: "全部分类",
            icon: "icon-quanbu",
            },
        ],
        centent_nav_list: [
            {
            tab: "天天神券",
            data: [
                {
                pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                title: "酸菜鱼",
                sales: "2888",
                price: "20",
                label: ["门店上新", "下饭"],
                },
                {
                pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.cfcy168.com%2FUploadFiles%2F2020%2F2%2F15904074889874037.jpg&refer=http%3A%2F%2Fwww.cfcy168.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645421933&t=66b58fbba9dce6f6b397e38820de24dc",
                title: "隆江猪脚饭",
                sales: "2888",
                price: "20",
                label: ["门店上新", "很下饭"],
                },
                {
                pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                title: "酸菜鱼",
                sales: "2888",
                price: "20",
                label: ["门店上新", "很下饭"],
                },
                {
                pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                title: "酸菜鱼",
                sales: "2888",
                price: "20",
                label: ["门店上新", "很下饭"],
                },
            ],
            },
            {
            tab: "减配送费",
            data: [
                {
                pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                title: "酸菜鱼",
                sales: "2888",
                price: "20",
                label: ["门店上新", "很下饭"],
                },
            ],
            },
            {
            tab: "点评高分",
            data: [
                {
                pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                title: "酸菜鱼",
                sales: "2888",
                price: "20",
                label: ["门店上新", "很下饭"],
                },
                {
                pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                title: "酸菜鱼",
                sales: "2888",
                price: "20",
                label: ["门店上新", "很下饭"],
                },
            ],
            },
            {
            tab: "会员满减",
            data: [
                {
                pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                title: "酸菜鱼",
                sales: "2888",
                price: "20",
                label: ["门店上新", "很下饭"],
                },
                {
                pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                title: "酸菜鱼",
                sales: "2888",
                price: "20",
                label: ["门店上新", "很下饭"],
                },
                ],
            },
        ],
    })

           
        const active = ref(0)
        return {
            ...toRefs(data),
            active,
        }
    }
}
</script>

<style lang="less" scoped>
.home{
    display: flex;
    flex-flow: column;
    height: 100%;
    font-size: 12px;
    .content{
        flex:1;
        overflow: auto;
        .header{
            background-image:linear-gradient(#ffc400,#fff);
            display: flex;
            justify-content: space-between;
            text-align: center;
            padding: 20px 20px 40px 20px;
            .text{
                font-size: 20px;
                font-weight: 600;
            }
            .location{
                span{
                    margin: 0 5px;
                }
                font-size: 14px;
            }
        }
        .main{
            margin-top: -30px;
            .main-bg{
               background-image: linear-gradient(#fff,#f5f5f5); 
               padding: 10px 20px 0px 20px;
               border-radius: 30px 30px 0 0;
               .search{
                position: relative;
                input{
                    width: 100%;
                    border: 1px solid #ffc400;
                    border-radius: 20px;
                    height: 30px;
                }
                .search-text{
                    position: absolute;
                    right: -6px;
                    top: 0.75px;
                    background-color: #ffc400;
                    border-radius: 16px;
                    width: 50px;
                    height: 32px;
                    line-height: 32px;
                    font-size: 14px;
                    text-align: center;
                }
               }
               .sort{
                padding: 20px 0;
                .big-sort{
                    display: flex;
                    div{
                        flex: 1;
                        display: flex;
                        justify-content: center;
                        flex-flow: column;
                        align-items: center;
                        .icon{
                            width: 50px;
                            height: 50px;
                            margin-bottom: 5px;
                        }
                    }
                    
                 }
                 .small-sort{
                    display: flex;
                    flex-wrap: wrap;
                    margin-top: 20px;
                    
                    div{
                        
                        display: flex;
                        justify-content: center;
                        flex-flow: column;
                        align-items: center;
                        width: 20%;
                        .icon{
                            width: 30px;
                            height: 30px;
                            margin: 10px;
                        }
                    }
                    
                 }
               }
            }
            .van-tabs{
                padding: 0 20px 10px;
            }
        }
    }
}
/deep/ .van-tabs__wrap{
    border-radius: 10px;
}
</style>