import router from './router/index'
import cookie from 'js-cookie'
import {useRouter} from 'vue-router'
router.beforeEach((to, from, next) => {

  const token = cookie.get('token')
  console.log('token', token)
  console.log('from', from)
  console.log('to', to)
  if (!token) {
    if (to.path === `/sign`) {
      next()
    } else {
      next('/sign')
    }
  } else {
    next()
  }
  next()

})