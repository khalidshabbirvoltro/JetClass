import { createApp } from 'vue'
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import './style.css'
// import 'quasar/src/css/index.sass'
import 'quasar/dist/quasar.css'
import App from './App.vue'
import router from './Layouts/PreAuth'
const app = createApp(App)
app.use(Quasar,{
    plugins:{}
})
app.use(router)
app.mount('#app')
