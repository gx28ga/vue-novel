import Vue from 'vue';
import Router from 'vue-router';
import Main from './views/Main.vue';
import Home from './views/home/Home.vue';
import category from './views/Category.vue';
import Cart from './views/Cart.vue';
import Me from './views/Me.vue';
import BookDetail from '@/components/BookDetail.vue';
Vue.use(Router);

export default new Router({
  mode:'history',
  linkActiveClass:'active',
  base:__dirname,
  routes: [
    {
      name:'Main',
      path:'/',
      component:Main,
      children:[
        {
          path: 'home',
          name: 'Home',
          component: Home,
        },{
          path: 'category',
          name: 'Category',
          component: category,
        },{
          path: 'cart',
          name: 'Cart',
          component: Cart,
        },{
          path: 'me',
          name: 'Me',
          component: Me,
        },
      ]
    },
    {
      path:'/books/:id',
      name:'BookDetail',
      component:BookDetail,
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
  ],
});
