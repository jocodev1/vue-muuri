# vue-tiles

[![npm](https://img.shields.io/npm/v/vue-tiles.svg)](https://www.npmjs.com/package/vue-tiles) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> A vue plugin using [Muuri](https://github.com/haltu/muuri)'s responsive, sortable, filterable and draggable grid layouts.

Vue-tiles was created to provide an alternative option for creating a responsive dashboard in Vue. It is essentially a vue wrapper for [Muuri](https://github.com/haltu/muuri). Using Vue's modular component system, vue-tiles allows us to drop in any number of tile components to quickly create our dashboard.

## Installation

```bash
npm install --save vue-tiles
```

### Bundler (Webpack)

```js
import Vue from 'vue'
import VueTiles from 'vue-tiles'
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import 'vue-tiles/dist/vue-tiles.css'

Vue.use(VueTiles)
```

## How to Use

Vue tiles consists of a base `vue-tile-grid` component that implements the [Muuri](https://github.com/haltu/muuri) plugin. Using this component, we will be able to insert any number of tile components through its slot.

Example:
```html
    <vue-tile-grid id="example-grid">
      <!-- slot content -->
    </vue-tile-grid>
```

Out-of-the-box, vue-tiles comes with a few tile components to get you started.
```js
    import { LinkTile, ContentSm, ContentMd, ContentLg } from 'vue-tiles'
```

```html
    <vue-tile-grid id="example-grid">
      <link-tile id="link" text="Example Link" route="/"></link-tile>
      
      <content-sm id="content-sm">
        <p>Here is some small content.</p>
      </content-sm>
      
      <content-md id="content-md">
        <p>Here is some medium content.</p>
      </content-md>
      
      <content-lg id="content-lg">
        <p>Here is large content.</p>
      </content-lg>
    </vue-tile-grid>
```

## Events

Vue-tiles also allows you to listen to events on the grid object created by [Muuri](https://github.com/haltu/muuri). Please refer to the [docs](https://github.com/haltu/muuri) for a complete list of events.

Example:
```html
    <vue-tile-grid id="example-grid" @layoutEnd="updateOrder">
      <content-sm :id="'content-sm-' + index" v-for="num, index in [1,2,3,4]">
        <p>Content {{ num }}</p>
      </content-sm>
    </vue-tile-grid>
```

```js
    // ...
    methods: {
        updateOrder (items) {
            console.log(items)
        }
    }
```

## License

[MIT](http://opensource.org/licenses/MIT)
