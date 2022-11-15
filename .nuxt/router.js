import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _39883627 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _88c29e68 = () => interopDefault(import('../pages/disasters.vue' /* webpackChunkName: "pages/disasters" */))
const _7c085935 = () => interopDefault(import('../pages/home.vue' /* webpackChunkName: "pages/home" */))
const _7563858f = () => interopDefault(import('../pages/newsletter.vue' /* webpackChunkName: "pages/newsletter" */))
const _465c9882 = () => interopDefault(import('../pages/resources.vue' /* webpackChunkName: "pages/resources" */))
const _51851738 = () => interopDefault(import('../pages/updates.vue' /* webpackChunkName: "pages/updates" */))
const _594010ec = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _39883627,
    name: "about"
  }, {
    path: "/disasters",
    component: _88c29e68,
    name: "disasters"
  }, {
    path: "/home",
    component: _7c085935,
    name: "home"
  }, {
    path: "/newsletter",
    component: _7563858f,
    name: "newsletter"
  }, {
    path: "/resources",
    component: _465c9882,
    name: "resources"
  }, {
    path: "/updates",
    component: _51851738,
    name: "updates"
  }, {
    path: "/",
    component: _594010ec,
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
