import React from 'react';
import { createBrowserRouter } from 'react-router-dom'

const Home = React.lazy(() => import('@pages/Home'))
const Login = React.lazy(() => import('@pages/Login'))
const NotFound = React.lazy(() => import('@components/NotFound'))
const Product = React.lazy(() => import('@pages/Product'))
const ProductList = React.lazy(() => import('@pages/Product/List'))
const ProductDetail = React.lazy(() => import('@pages/Product/Detail'))

const routers = createBrowserRouter([
    {
        path: '/',
        name: '主页',
        element: <Home />
    },
    {
        path: '/login',
        name: '登陆',
        element: <Login />
    },
    {
        path: '/product',
        name: '产品',
        element: <Product />,
        children: [
            {
                path: 'list',
                name: '产品列表',
                element: <ProductList />
            },
            {
                path: 'detail',
                name: '产品详情',
                element: <ProductDetail />
            }
        ]
    },
    {
        path: '*',
        name: '404',
        element: <NotFound />
    }
]);

export default routers;