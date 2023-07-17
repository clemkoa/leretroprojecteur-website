import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './firebase'
import router from './router'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as labsComponents from 'vuetify/labs/components'

const vuetify = createVuetify({
  components: {
    ...components,
    ...labsComponents,
  },
  directives,
})

const app = createApp(App)
app.use(vuetify)
app.use(VueFire, {
  firebaseApp,
  modules: [
    VueFireAuth()
  ]
})
app.use(router)
app.mount('#app')
