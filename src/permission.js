import router from './router/index'
import cookie from 'js-cookie'
import {useRouter} from 'vue-router'
router.beforeEach((to, from, next) => {
  console.log('---------from', from)
  console.log('---------to', to)
  console.log('cookie', cookie)

  next()
  return
  if (to.path.indexOf('/sign') > -1) {
    console.log('-1')
    next()
  } else if (cookie.get("token")) {
    console.log('2')
    next()
  } else {
    console.log('3')
    next(`/sign`)
  }
  // const token = cookie.get('token')
  // console.log('token', token)
  // console.log('from', from)
  // console.log('to', to)
  // if (!token) {
  //   if (to.path === `/sign`) {
  //     next()
  //   } else {
  //     next('/sign')
  //   }
  // } else {
  //   next()
  // }
  next()

})
