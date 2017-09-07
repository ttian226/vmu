<template>
  <div class="vm-flex" :class="clsObj">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VFlex',
  props: {
    direction: String,
    wrap: String,
    justify: String,
    align: String,
    alignContent: String
  },
  data () {
    return {
      clsObj: {
        'vm-flex-direction-row': this.direction === 'row',
        'vm-flex-direction-row-reverse': this.direction === 'row-reverse',
        'vm-flex-direction-column': this.direction === 'column',
        'vm-flex-direction-column-reverse': this.direction === 'column-reverse',
        'vm-flex-nowrap': this.wrap === 'nowrap',
        'vm-flex-wrap': this.wrap === 'wrap',
        'vm-flex-wrap-reverse': this.wrap === 'wrap-reverse',
        'vm-flex-justify-start': this.justify === 'start',
        'vm-flex-justify-end': this.justify === 'end',
        'vm-flex-justify-center': this.justify === 'center',
        'vm-flex-justify-between': this.justify === 'between',
        'vm-flex-justify-around': this.justify === 'around',
        'vm-flex-align-start': this.align === 'start',
        'vm-flex-align-center': this.align === 'center',
        'vm-flex-align-end': this.align === 'end',
        'vm-flex-align-baseline': this.align === 'baseline',
        'vm-flex-align-stretch': this.align === 'stretch',
        'vm-flex-align-content-start': this.alignContent === 'start',
        'vm-flex-align-content-end': this.alignContent === 'end',
        'vm-flex-align-content-center': this.alignContent === 'center',
        'vm-flex-align-content-between': this.alignContent === 'between',
        'vm-flex-align-content-around': this.alignContent === 'around',
        'vm-flex-align-content-stretch': this.alignContent === 'stretch'
      }
    }
  }
}
</script>

<style lang="less">
  @import '../style/mixins';

  @flexPrefixCls: vm-flex;

  .@{flexPrefixCls} {
    display: flex;
    align-items: center;
    overflow-y: hidden;
    text-align: left;

    .vm-flex-direction-row {
      flex-direction: row;
    }

    &&-direction-row-reverse {
      flex-direction: row-reverse;
    }

    &&-direction-column {
      flex-direction: column;
    }

    &&-direction-column-reverse {
      flex-direction: column-reverse;
    }

    &&-nowrap {
      flex-wrap: nowrap;
    }

    &&-wrap {
      flex-wrap: wrap;
    }

    &&-wrap-reverse {
      flex-wrap: wrap-reverse;
    }

    &&-justify-start {
      justify-content: flex-start;
    }

    &&-justify-end {
      justify-content: flex-end;
    }

    &&-justify-center {
      justify-content: center;
    }

    &&-justify-between {
      justify-content: space-between;
    }

    &&-justify-around {
      justify-content: space-around;
    }

    &&-align-start {
      align-items: flex-start;
    }

    &&-align-center {
      align-items: center;
    }

    &&-align-end {
      align-items: flex-end;
    }

    &&-align-baseline {
      align-items: baseline;
    }

    &&-align-stretch {
      align-items: stretch;
    }

    &&-align-content-start {
      align-content: flex-start;
    }

    &&-align-content-end {
      align-content: flex-end;
    }

    &&-align-content-center {
      align-content: center;
    }

    &&-align-content-between {
      align-content: space-between;
    }

    &&-align-content-around {
      align-content: space-around;
    }

    &&-align-content-stretch {
      align-content: stretch;
    }
  }
</style>
