<template>
  <div class="vm-flex-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VFlexItem',
}
</script>

<style lang="less">
  .vm-flex {
    .vm-flex-item {
      box-sizing: border-box;
      flex: 1;
      margin-left: .16rem;
      min-width: .2rem;

      &:first-child {
        margin-left: 0;
      }
    }
  }

  .vm-flex.vm-flex-direction-row-reverse {
    .vm-flex-item {
      &:first-child {
        margin-left: .16rem;
      }

      &:last-child {
        margin-left: 0;
      }
    }
  }
</style>
