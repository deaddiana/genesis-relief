import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _023bb640 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _50809b05 = () => interopDefault(import('../pages/disasters.vue' /* webpackChunkName: "pages/disasters" */))
const _0ec92f5c = () => interopDefault(import('../pages/home.vue' /* webpackChunkName: "pages/home" */))
const _7cbee276 = () => interopDefault(import('../pages/newsletter.vue' /* webpackChunkName: "pages/newsletter" */))
const _71b39df8 = () => interopDefault(import('../pages/resources.vue' /* webpackChunkName: "pages/resources" */))
const _a452ce46 = () => interopDefault(import('../pages/updates.vue' /* webpackChunkName: "pages/updates" */))
const _1e99ffa5 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _023bb640,
    name: "about"
  }, {
    path: "/disasters",
    component: _50809b05,
    name: "disasters"
  }, {
    path: "/home",
    component: _0ec92f5c,
    name: "home"
  }, {
    path: "/newsletter",
    component: _7cbee276,
    name: "newsletter"
  }, {
    path: "/resources",
    component: _71b39df8,
    name: "resources"
  }, {
    path: "/updates",
    component: _a452ce46,
    name: "updates"
  }, {
    path: "/",
    component: _1e99ffa5,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
