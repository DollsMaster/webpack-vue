import { createStore } from 'vuex'
import common from './modules/common.js'
const store = new createStore({
  modules: {
    common
  }
})
export default store