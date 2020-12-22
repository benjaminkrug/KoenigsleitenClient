import Vue from "vue";
import Router from "vue-router";

import GalerieHome from '../components/Galerie/GalerieHome.vue'
import ImagesOverview from '../components/Galerie/ImagesInGalerie/ImagesOverview.vue'
import HelloWorld from '../components/HelloWorld.vue'
import TestComponent from '../components/Test/TestComponent.vue'
import Bild from '../components/Test/Bild.vue'
const Bar = { template: '<div>bar</div>' }

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: '/test/helloworld', component: HelloWorld },
    {
      path: '/galerie',
      component: GalerieHome
    },
    {
      path:'/galerie/:id',
      component: ImagesOverview
    },
    { path: '/test', component: TestComponent },
    { path: '/test/bild', component: Bild },
    { path: '/bar', component: Bar },
    {
      path: "/profile",
      name: "profile",
      component: Bild
    }
  ]
});

export default router;
