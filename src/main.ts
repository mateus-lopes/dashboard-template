/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins / Vuetify / Tailwind
import { registerPlugins } from '@/plugins'
import '@/assets/tailwind.css'

// Components / App
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
