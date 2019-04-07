import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'uikit/dist/css/uikit.css'

import UIkit from 'uikit'
import UIkitIcons from 'uikit/dist/js/uikit-icons'
UIkitIcons(UIkit)

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
