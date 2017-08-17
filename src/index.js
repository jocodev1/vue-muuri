import Grid from './components/Grid.vue'
import LinkTile from './components/tiles/Link.vue'
import ContentSm from './components/tiles/ContentSm.vue'
import ContentMd from './components/tiles/ContentMd.vue'
import ContentLg from './components/tiles/ContentLg.vue'

var plugin = {
  install: function (Vue, store) {
    Vue.component('vue-tile-grid', Grid)
  }
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
const version = '__VERSION__'
// Export all components too
export {
  Grid,
  LinkTile,
  ContentSm,
  ContentMd,
  ContentLg,
  version
}
