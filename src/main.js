///require('update-electron-app')()

import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'


import Vuetify from 'vuetify'


import 'vuetify/dist/vuetify.min.css'
import { library ,dom } from '@fortawesome/fontawesome-svg-core'
import { faUserCircle, faWeightHanging ,faBalanceScale, faLevelUpAlt, faArrowUp} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// main.js
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import VueBarcode from '@xkeshi/vue-barcode';

Vue.component(VueBarcode.name, VueBarcode);

library.add(faUserCircle, faWeightHanging, faBalanceScale, faLevelUpAlt, faArrowUp)

Vue.component('font-awesome-icon', FontAwesomeIcon)


var faseca = {
  prefix: 'fas',
  iconName: 'list-old-style',
  icon: [46, 15, [], 'st0', 'M45.4,13c0-1.1,0-8.9,0-8.9s0.1-4-5.4-4.1c-5-0.1-5.4,3.3-5.4,3.3S33-0.1,29,0c-5.7,0.2-6.1,6.1-6.1,6.1S22.2,0,16.9,0c-5.2,0-6.3,4.4-6.4,6.9c0,0.8,0.1,1.4,0.1,1.6c-0.2-0.4-0.5-0.8-0.8-1.1C9.5,7.3,9.2,7,8.2,6.6C7.1,6.2,6.2,6,6.1,6C5.9,6,4.2,5.6,3.9,5.5c-0.3-0.2-1-0.3-1-1.3c0-1.1,1.7-2.1,3.6-1.4C7.7,3.2,8.5,4,8.5,4l1.7-2c0,0-1.1-1-2.5-1.5C6.9,0.2,5.6-0.2,3.9,0.1C2.4,0.5,1.1,1.4,0.5,2.8c0,0-0.4,0.8-0.4,1.7c0,0.9,0.5,2.8,2.8,3.6c0.3,0.1,0.9,0.3,3.1,0.7c0.3,0,2.1,0.3,2.1,1.7c0,0.3-0.1,1.4-1.8,1.7c-0.5,0.1-2.2,0.2-4.6-1.8L0,12.2c0,0,2.7,2.8,6,2.7c4.3-0.1,4.9-3.6,4.9-4.2c0,0,0,0,0,0c0.1,0.2,1.9,4.2,6,4.1c3.8-0.1,5.2-2.5,6-3.7l-2.4-1.4c0,0-1.3,2.6-3.7,2.4c-3.7-0.4-3.4-4-3.4-4l9.5,0c0,0,0.3,6.8,6.4,6.8c3.4,0,5.1-2.8,5.1-2.8s1.1,2.8,4.4,2.8c2.5,0,3.6-1.9,3.6-1.9l0,1.5H46C46,14.6,45.4,14.2,45.4,13z M13.5,5.5c-0.1,0,0.5-2.9,3.1-2.9c2.7,0,3.2,2.9,3.2,2.9H13.5z M35.1,7.6c-0.8,0.9-1,2.2-1,2.2l-1.6-0.6c0,0-0.8,3-3.4,2.9c-2.3-0.1-3.3-2.5-3.3-4.8c0-2.3,1.1-4.6,3.3-4.5C31.3,2.8,32.2,5,32.2,5l2.3-1c0,0-0.1,0.7,0,0.9h2.9c0,0-0.4-2.4,2.4-2.4c2.1,0,2.4,1.1,2.4,1.4c0,0.4,0,1.2,0,1.2s-2.9,0.7-5.4,1.5C36.1,6.8,35.4,7.2,35.1,7.6z M42.1,10.7c-0.3,0.6-1.4,1.7-3.1,1.7c-1.7,0-2.1-1.4-2.1-1.6c-0.1-0.6,0.1-1.1,0.5-1.5c0.8-0.6,2.1-0.9,2.1-0.9l2.9-0.8l0,2C42.3,9.7,42.4,10.1,42.1,10.7z']
}

library.add(
  faseca
)

dom.watch()


Vue.use(Vuetify)
Vue.use(axios)

Vue.use(Vuetify, {
  iconfont: 'mdi'
})

Vue.config.productionTip = false

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
//import '../src/assets/layout/css/all.css'

new Vue({





  render: h => h(App),

}).$mount('#app')
