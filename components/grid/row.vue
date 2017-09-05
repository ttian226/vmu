<template>
  <div class="vm-row">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VRow'
}
</script>

<style lang="less">
  .vm-row {
    position: relative;
    box-sizing: border-box;
    display: flex;
  }
</style>
