import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false

Vue.mixin({
  methods: {
    mouseLight() {
      document.querySelector('.g-cursor__circle').style.borderColor ="#ffffff"
      document.querySelector('.g-cursor__point').style.background ="#ffffff"
    },
    mouseDark() {
      document.querySelector('.g-cursor__circle').style.borderColor ="#7b7b7b"
      document.querySelector('.g-cursor__point').style.background ="#7b7b7b"
    },
    mouseHover() {
      document.querySelector('.g-cursor__point').style.width ="16px"
      document.querySelector('.g-cursor__point').style.height ="16px"
      document.querySelector('.g-cursor__point').style.top ="-3px"
      document.querySelector('.g-cursor__point').style.left ="-3px"
      document.querySelector('.g-cursor__point').style.opacity ="0.5"
    },
    mouseNormal() {
      document.querySelector('.g-cursor__point').style.width ="10px"
      document.querySelector('.g-cursor__point').style.height ="10px"
      document.querySelector('.g-cursor__point').style.top ="0"
      document.querySelector('.g-cursor__point').style.left ="0"
      document.querySelector('.g-cursor__point').style.opacity ="1"
    }
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
