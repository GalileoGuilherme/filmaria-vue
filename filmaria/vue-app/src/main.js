// src/main.js
import Vue from 'vue'
// incluimos ele (e seu CSS para o Webpack poder processar)
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
// dizemos ao Vue para importá-lo
Vue.use(VueMaterial)
// definimos um tema padrão para nosso MD
// você pode escolher qualquer uma na palheta do próprio Google
// link: https://material.google.com/style/color.html#color-color-palette
Vue.material.theme.register('default', {
  primary: 'light-blue',
  accent: 'pink'
})
