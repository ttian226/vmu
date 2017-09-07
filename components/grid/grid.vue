<template>
  <div class="vm-grid" :class="{'vm-grid-line': hasLine}">
    <v-flex justify="center" align="stretch" v-for="(row, rowIndex) in rowNum">
      <v-flex-item v-for="(col, colIndex) in data.slice(rowIndex * columnNum, rowIndex * columnNum + columnNum)" class="vm-grid-item">
        <div class="vm-grid-item-content">
          <div class="vm-grid-item-inner-content" :class="'column-num-' + columnNum">
            <img class="vm-grid-icon" :src="col.icon">
            <div class="vm-grid-text">{{ col.text }}</div>
          </div>
        </div>
      </v-flex-item>
    </v-flex>
  </div>
</template>

<script>
  import { VFlex, VFlexItem } from '../flex/'

  export default {
    name: 'VGrid',
    components: {
      VFlex,
      VFlexItem
    },
    props: {
      data: Array,
      columnNum: Number,
      hasLine: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      rowNum () {
        return this.data.length % this.columnNum === 0 ? this.data.length / this.columnNum : Math.floor(this.data.length / this.columnNum) + 1
      }
    }
  }
</script>

<style lang="less">
  @import '../style/mixins';
  @import '../style/themes/default';

  @flexPrefixCls: vm-flex;
  @gridPrefixCls: vm-grid;

  .@{gridPrefixCls} {
    .@{flexPrefixCls} {
      background: @fill-base;

      .@{flexPrefixCls}-item {
        margin-left: 0;

        &.@{gridPrefixCls}-item {
          position: relative;

          &:active {
            background-color: @fill-tap;
          }
        }

        &.@{gridPrefixCls}-item:before {
          display: block;
          content: ' ';
          padding-bottom: 100%;
        }

        .@{gridPrefixCls}-item-content {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          text-align: center;
          width: 100%;
          height: 100%;

          .@{gridPrefixCls}-item-inner-content {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .@{gridPrefixCls}-icon {
              margin-top: @v-spacing-md;
              width: 28%;
              height: 28%;
            }

            .@{gridPrefixCls}-text {
              margin-top: @v-spacing-md;
              font-size: @font-size-caption-sm;
              color: @color-text-base;
              text-align: center;
            }

            &.column-num-3 {
              .@{gridPrefixCls}-text {
                font-size: @font-size-caption;
              }
            }

            &.column-num-2 {
              .@{gridPrefixCls}-text {
                margin-top: @v-spacing-lg;
                font-size: @font-size-display-sm;
              }
            }
          }
        }
      }
    }

    &.@{gridPrefixCls}-line {
      .@{flexPrefixCls} {
        position: relative;
        .hairline-bottom(@border-color-base);

        &:last-child {
          .hairline-remove-right-bottom();
        }

        .@{flexPrefixCls}-item {
          position: relative;
          .hairline-right(@border-color-base);

          &:last-child {
            .hairline-remove-right-bottom();
          }
        }
      }
    }
  }
</style>
