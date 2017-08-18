<template>
  <div :id="id" class="item"
    :style="{
      'width': '100%',
      'max-width': width,
      'height': height
    }">
    <div class="item-content item-md">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'item-md',
    props: {
      id: {
        type: [Number, String],
        default: 'item-md'
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
