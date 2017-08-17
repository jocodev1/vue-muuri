<template>
  <div :id="id" class="item"
    :style="{
      'width': '100%',
      'max-width': width,
      'height': height
    }">
    <div class="item-content link-tile">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'content-md',
    props: {
      id: {
        type: [Number, String],
        default: 'tile'
      },
      width: {
        type: String,
        default: '410px'
      },
      height: {
        type: String,
        default: '410px'
      },
      onClick: {
        type: Function,
        default (id) {
          return null
        }
      }
    }
  }
</script>

<style scoped>

</style>
