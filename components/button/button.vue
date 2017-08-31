<template>
  <button class="vm-button">Button22</button>
</template>

<script>
export default {
  name: 'VButton'
}
</script>

<style lang="less">
  @buttonprefixCls: 'vm-button';
  .@{buttonprefixCls} {
    width: 100px;
    line-height: 36px;
  }
  .vm-button{
    width: 100px;
    line-height: 36px;
    background: #ccc;
  }
</style>

