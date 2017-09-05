<template>
  <div class="vm-col" :class="colClsName">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VCol',
  props: {
    span: {
      type: Number,
      default: 24
    }
  },
  computed: {
    colClsName () {
      return 'vm-col-' + this.span
    }
  }
}
</script>

<style lang="less">
  .vm-col {
    flex: 1;
  }
</style>
