import MuuriGrid from './components/MuuriGrid.vue'
import ItemLink from './components/items/ItemLink.vue'
import ItemSm from './components/items/ItemSm.vue'
import ItemMd from './components/items/ItemMd.vue'
import ItemLg from './components/items/ItemLg.vue'

var plugin = {
  install: function (Vue, store) {
    Vue.component('muuri-grid', MuuriGrid)
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
  MuuriGrid,
  ItemLink,
  ItemSm,
  ItemMd,
  ItemLg,
  version
}
