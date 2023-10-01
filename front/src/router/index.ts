import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import AddFeature from '@/views/AddFeature.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'dashboard',
			component: Dashboard
		},
        {
			path: '/create',
			name: 'create',
			component: AddFeature
		},
		{
			path: '/features',
			name: 'features',
			component: () => import('../views/FeatureList.vue')
		}
	]
})

export default router
