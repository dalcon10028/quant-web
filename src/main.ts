import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { enableMocking } from './mocks/enable-mocking'

const app = createApp(App)

app.use(createPinia())
app.use(router)

enableMocking().then(() => {
  app.mount('#app')
})
