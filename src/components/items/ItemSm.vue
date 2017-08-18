<template>
  <div :id="id" class="item"
    :style="{
      'width': '100%',
      'max-width': width,
      'height': height
    }">
    <div class="item-content item-sm">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'item-sm',
    props: {
      id: {
        type: [Number, String],
        default: 'item-sm'
      },
      width: {
        type: String,
        default: '200px'
      },
      height: {
        type: String,
        default: '200px'
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
