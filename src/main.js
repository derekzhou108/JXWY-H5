// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/lib/hammer.js'
import '@/lib/iscroll-zoom.js'
import '@/lib/lrz.all.bundle.js'
import '@/lib/PhotoClip.js'
import '@/lib/html2canvas.js'

import 'amfe-flexible'
import 'normalize.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import browser from './util/browser'

Vue.prototype.browser = browser

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
