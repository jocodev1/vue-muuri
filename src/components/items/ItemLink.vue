<template>
  <div
    :id="id"
    class="item"
    :style="{
      'width': '100%',
      'max-width': width,
      'height': height
    }">
    <div class="item-content link-item">
      <div class="handle"></div>
      <div class="clickable" v-on:click="onClick(id)">
        <form :id="id + '-form'" method="get" :action="route">
          <div class="icon text-center" v-if="iconClass !== null">
            <i :class="iconClass"></i>
          </div>
          <div class="content text-center">
            <h5>{{ text }}</h5>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import jQuery from 'jquery'

  export default {
    name: 'item-link',
    props: {
      id: {
        type: [Number, String],
        default: 'tile'
      },
      text: {
        type: String,
        default: 'tile-text'
      },
      iconClass: {
        type: String,
        default: null
      },
      width: {
        type: String,
        default: '200px'
      },
      height: {
        type: String,
        default: '200px'
      },
      route: {
        type: String,
        default: '',
      },
      onClick: {
        type: Function,
        default (id) {
          return jQuery('#' + id + '-form').submit()
        }
      }
    }
  }
</script>

<style scoped>
  .text-center {
    text-align: center
  }
  .hidden {
    display: none
  }
  .handle {
    width: 100%;
    height: 25px
  }
  .handle:hover {
    cursor: move
  }
  .clickable {
    height: 100%;
    padding-top: 35px;
    color: blue
  }
  .clickable:hover {
    cursor: pointer
  }
</style>
