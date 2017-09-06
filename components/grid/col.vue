<template>
  <div class="vm-col" :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VCol',
  props: {
    percent: Number
  },
  computed: {
    gutter () {
      return this.$parent.gutter
    },
    style () {
      let style = {}
      if (this.gutter) {
        style.paddingLeft = this.gutter / 2 + 'px'
        style.paddingRight = style.paddingLeft
      }
      if (this.percent) {
        style.flexBasis = this.percent + '%'
      }
      return style
    }
  }
}
</script>

<style lang="less">
  .vm-col {
    flex: 1;
  }
</style>
