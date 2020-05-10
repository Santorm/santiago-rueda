import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './routes.js'
import App from './App.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)


// santiago-rueda\src\main.js
Vue.config.productionTip = false

Vue.mixin({
  methods: {
    mouseLight() {
      if (document.querySelector('.g-cursor__circle') && document.querySelector('.g-cursor__point')) {
        document.querySelector('.g-cursor__circle').style.borderColor = "#ffffff"
        document.querySelector('.g-cursor__point').style.background = "#ffffff"
      }
    },
    mouseDark() {
      if (document.querySelector('.g-cursor__circle')) {
        document.querySelector('.g-cursor__circle').style.borderColor = "#7b7b7b"
        document.querySelector('.g-cursor__point').style.background = "#7b7b7b"
      }
    },
    mouseHover() {
      if (document.querySelector('.g-cursor__point')) {
        document.querySelector('.g-cursor__point').style.width = "16px"
        document.querySelector('.g-cursor__point').style.height = "16px"
        document.querySelector('.g-cursor__point').style.top = "-3px"
        document.querySelector('.g-cursor__point').style.left = "-3px"
        document.querySelector('.g-cursor__point').style.opacity = "0.5"
      }
    },
    mouseNormal() {
      if (document.querySelector('.g-cursor__point')) {
        document.querySelector('.g-cursor__point').style.width = "10px"
        document.querySelector('.g-cursor__point').style.height = "10px"
        document.querySelector('.g-cursor__point').style.top = "0"
        document.querySelector('.g-cursor__point').style.left = "0"
        document.querySelector('.g-cursor__point').style.opacity = "1"
      }
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
