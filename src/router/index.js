import Vue from 'vue';
import Router from 'vue-router';
import LoginPage from '@/views/LoginPage.vue'; // import หน้า Login

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginPage,
    },
    {
      path: '/home',
      name: 'Home',
      // ใส่ component ของ Home เมื่อ login สำเร็จ (หรือจะเพิ่มทีหลังก็ได้)
      component: () => import('@/views/HomePage.vue'), // Lazy-load หน้า Home
    },
  ],
});
