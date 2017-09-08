<template>
  <div class="vm-row" :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VRow',
  props: {
    gutter: Number
  },
  computed: {
    style () {
      var style = {}
      if (this.gutter) {
        style.marginLeft = `-${this.gutter / 2}px`
        style.marginRight = style.marginLeft
      }
      return style
    }
  }
}
</script>

<style lang="less">
  .vm-row {
    position: relative;
    box-sizing: border-box;
    display: flex;
  }
</style>
