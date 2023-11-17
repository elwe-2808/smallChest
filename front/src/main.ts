import './assets/main.scss'
import {components, plugins} from '@/config/plugins'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
const app = createApp(App)

app.use(router)
app.use(PrimeVue);

app.mount('#app')


for (const plugin of plugins) {
    app.use(plugin)
}

for (const component of components) {
    app.component(component.name, component)
}
