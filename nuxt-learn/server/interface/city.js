import Router from 'koa-router'
import axios from 'axios'

const router = new Router({
  prefix: '/city'
})

router.get('/list', async (ctx) => {
  ctx.body = {
    list: ['北京', '天津']
  }
})

export default router
