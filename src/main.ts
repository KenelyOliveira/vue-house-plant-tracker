import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import useVuelidate from '@vuelidate/core';

createApp(App).use(store).use(router).use(useVuelidate).mount('#app');