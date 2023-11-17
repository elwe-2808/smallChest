import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home.vue'
import Feature from '@/components/Feature.vue'
import FeatureDetails from '@/components/FeatureDetails.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
            children: [
                {
                    path: 'category/:categoryId',
                    name: 'features',
                    props: true,
                    component: Feature
                },
                {
                    path: 'feature/:featureId',
                    name: 'feature',
                    props: true,
                    component: FeatureDetails,
                }
            ]
		},
	]
})

export default router
