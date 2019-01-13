export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: './User/Login' },
      { path: '/user/register', component: './User/Register' },
      { path: '/user/register-result', component: './User/RegisterResult' },
    ],
  },


  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    authority: ['admin', 'user'],
    routes: [

       // dashboard选项卡路由配置
       { path: '/', redirect: '/doc/doc1' },

      //新建的导航
      {
        path: '/doc',
        name: '文档',
        icon: 'question-circle',
        routes: [
          // 子页面1
          {
            path: '/doc/doc1',
            name: '分页图表',
            component: './Doc/doc1',
          },
          // 子页面2
          {
            path: '/doc/doc2',
            name: '编辑器',
            component: './Doc/doc2',
          },
          // 子页面3
          {
            path: '/doc/doc3',
            name: '图表',
            component: './Doc/doc3',
          },
        ],
      },

      {
        component: '404',
      },
    ],
  },
];
