<template>
  <div :id="id" class="item"
    :style="{
      'width': '100%',
      'max-width': width,
      'height': height
    }">
    <div class="item-content item-lg">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'item-lg',
    props: {
      id: {
        type: [Number, String],
        default: 'item-lg'
      },
      width: {
        type: String,
        default: '620px'
      },
      height: {
        type: String,
        default: '620px'
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
