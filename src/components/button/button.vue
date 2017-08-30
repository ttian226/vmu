<template>
  <button class="vm-button img">Button</button>
</template>

<script>
export default {
  name: 'button'
}
</script>

<style lang="less">
  @buttonprefixCls: 'vm-button';
  .@{buttonprefixCls} {
    width: 100px;
    line-height: 36px;
  }
</style>


