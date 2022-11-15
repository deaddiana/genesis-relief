export { default as AboutPage } from '../../components/AboutPage.vue'
export { default as ArticlesCom } from '../../components/ArticlesCom.vue'
export { default as DisastersPage } from '../../components/DisastersPage.vue'
export { default as HeaderCom } from '../../components/HeaderCom.vue'
export { default as HomePage } from '../../components/HomePage.vue'
export { default as NewsletterPage } from '../../components/NewsletterPage.vue'
export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as ResourcesPage } from '../../components/ResourcesPage.vue'
export { default as Tutorial } from '../../components/Tutorial.vue'
export { default as UpdatesPage } from '../../components/UpdatesPage.vue'
export { default as Card } from '../../components/card.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
