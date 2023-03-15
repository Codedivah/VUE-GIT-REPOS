import { createRouter, createWebHistory } from 'vue-router'
import ReposView from '../views/ReposView.vue'
import repoView from '../views/RepoView.vue'
import NotFound from '../views/NotFoundView.vue'
import LayoutView from '../views/LayoutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path:'/',
      name: 'layout',
      component:LayoutView,
      children:[

      {
        path: '/repos',
        name: 'repos',
        component: ReposView,
      },
      
      {
        path: '/',
        name: 'home',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/HomeView.vue')
      },
  
  
      {
  
        path: '/repo/:name',
        name:'repo',
        component: repoView
      },
     ]
     },

    
    { 
       path: '/:pathMatch(.*)', 
       component: NotFound 
  },

]
})
  



export default router
