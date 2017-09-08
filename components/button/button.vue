<template>
  <a class="vm-button" :disabled="disabled"
    @mousedown="click()"
    :role="buttonType"
    :class="[
      type ? 'vm-button-' + type : '',
      size ? 'vm-button-' + size : '',
      {
        'vm-button-disabled' : disabled,
        'vm-button-loading' : loading,
        'vm-button-inline' : inline,
        'vm-button-active' : active
      }
    ]"
  >
    <!-- <i></i> -->
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'VButton',
  data() {
    return {
      active: false
    }
  },
  props: {
    buttonType: {
      type: String,
      default: 'button'
    },
    type: String,
    size: String,
    disabled: Boolean,
    loading: Boolean,
    inline: Boolean
  },
  methods: {
    click () {
      console.log(3)
    }
  }
}
</script>

<style lang="less">
  @import '../style/mixins';
  @import '../style/themes/default';

  @buttonPrefixCls: vm-button;
  .@{buttonPrefixCls} {
    display: block;
    outline: 0 none;
    -webkit-appearance: none;
    box-sizing: border-box;
    padding: 0;
    text-align: center;
    font-size: @button-font-size;
    height: @button-height;
    line-height: @button-height;
    border-radius: @radius-md;

    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    white-space: nowrap;

    // default
    color: @color-text-base;
    background-color: @fill-base;
    border: @border-width-sm solid @border-color-base;

    &&-active {
      background-color: @fill-tap;
    }

    &-primary {
      color: @color-text-base-inverse;
      background-color: @primary-button-fill;
      border: @border-width-sm solid @primary-button-fill;

      &.@{buttonPrefixCls}-active {
        background-color: @primary-button-fill-tap;
      }
    }

    &-inline {
      display: inline-block;
      padding: 0 @h-spacing-lg;
    }

    &-small {
      font-size: @button-font-size-sm;
      height: @button-height-sm;
      line-height: @button-height-sm;
      padding: 0 @h-spacing-lg;
      border-radius: @radius-md;
    }

    &-ghost {
      color: @ghost-button-color;
      background-color: transparent;
      border: @border-width-sm solid @ghost-button-color;

      &.@{buttonPrefixCls}-active {
        color: @color-text-base-inverse;
        background-color: @ghost-button-fill-tap;
        border: @border-width-sm solid @ghost-button-color;
      }
    }

    &-warning {
      color: #f86e21;
      background-color: @fill-base;
    }

    & {
      &.@{buttonPrefixCls}-disabled {
        color: @color-text-disabled;
        background-color: @fill-disabled;
        border: 0;
      }
    }
  }
</style>

