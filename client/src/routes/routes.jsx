import React, { lazy, useContext, useState } from 'react';
import Loadable from '../components/loadable';

// const Home = Loadable(lazy(() => import('../pages/home')))
const Login = Loadable(lazy(() => import('../pages/login')))
const Items = Loadable(lazy(() => import('../pages/items')))


const Router = [
    {
        path: '/',
        element: <Items />,
        children: [
            { path: '/items', exact: true, element: <Items /> },
        ],
    },
    {
        path: '/login',
        children: [
            { path: '/login', exact: true, element: <Login /> },
        ],
    },
];

export default Router;
