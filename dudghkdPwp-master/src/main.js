import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js'
import store from './store/index.js'
import loadImage from './plugins/loadImage.js'

createApp(App)
  .use(store)
  .use(router)
  .use(loadImage)
  .mount('#app')
  