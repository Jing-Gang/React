
import IndexPage from '../views/IndexPage'
import Add from '../views/main/add'
export default{
    routes:[
        {
            name:'shoye',
            path:'/main/shoye',
            component:IndexPage,
            children:[
                
            ]
        },
        {
            name:'Money',
            path:'/main/money',
            component:()=><p>财富</p>
        },
        {
            name:'Ko',
            path:'/main/ko',
            component:()=><p>口碑</p>
        },
        {
            name:'Friend',
            path:'/main/friend',
            component:()=><p>朋友</p>
        },
        {
            name:'My',
            path:'/main/my',
            component:()=><p>我的</p>
        },
        {
            path:'/main/add',
            component:Add
        },
        {
            path:'/',
            redirect:'/main/shoye'
        }
    ]
}