
// 没有惊醒懒加载之前
// import Home from '@/views/home'

import React from "react"
import { Navigate } from "react-router-dom"

// 路由懒加载
const Home = React.lazy(() => import("@/views/home"))
const Entire = React.lazy(() => import("@/views/entire"))
const Detail = React.lazy(() => import("@/views/detail"))

const routes =[
    {
        path:'/',
        element:<Navigate to='/home' />
    },
    {
        path:'/home',
        element:<Home/>,
        children:[

        ]
    },
    {
        path:'/entire',
        element:<Entire/>
    },
    {
        path:'/detail',
        element:<Detail/>
    },
]

export default routes
