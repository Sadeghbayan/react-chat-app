import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
import Music from './Music/Music'


const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/home', name: 'Home', component: Dashboard },
];



export default routes;
