import React from 'react';
const routers = [
    {
        path: '/',
        title: '主页',
        component: React.lazy(() => import('@pages/Home')),
    },
    {
        path: '/login',
        title: '登陆',
        component: React.lazy(() => import('@pages/Login')),
    },
    {
        path: '/product',
        title: '产品',
        routes: [
            {
                path: '/product/list',
                title: '产品列表',
                component: React.lazy(() => import('@pages/Product/List')),
            },
            {
                path: '/product/detail',
                title: '产品详情',
                component: React.lazy(() => import('@pages/Product/Detail')),
            }
        ]
    },
];

export default routers;