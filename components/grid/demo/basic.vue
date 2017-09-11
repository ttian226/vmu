<template>
  <div class="grid-demo">
    <div class="sub-title">columnNum="3"</div>
    <v-grid :data="data" :columnNum="3" @onClick="clickEvent"></v-grid>
    <div class="sub-title">columnNum="4"</div>
    <v-grid :data="data" :columnNum="4"></v-grid>
    <div class="sub-title">no border</div>
    <v-grid :data="data" :hasLine="false"></v-grid>
    <div class="sub-title">customer</div>
    <v-grid :data="data" :renderItem="customerItem"></v-grid>
  </div>
</template>
<script>
import { VGrid } from '../'

export default {
  components: {
    VGrid
  },
  data () {
    return {
      data: Array.from(new Array(9)).map((val, index) => ({
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
        text: `name${index}`
      }))
    }
  },
  methods: {
    clickEvent (el, index) {
      console.log(el, index)
    },
    customerItem (item) {
      return `
        <div style="padding: 0.25rem">
          <img src="${item.icon}" style="width: .7rem; height: .7rem;" alt="icon"/>
          <div style="color: #888; font-size: 0.25rem; margin-top: 0.24rem;">
            <span>我是标题..</span>
          </div>
        </div>
      `
    }
  }
}
</script>
<style lang="less">
  .grid-demo {
    margin-left: 15px;
    margin-right: 15px;

    .vm-grid {
      border: 1px solid #ddd;
    }
  }
</style>
