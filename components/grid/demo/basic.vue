<template>
  <div class="grid-demo">
    <div class="sub-title">columnNum="3"</div>
    <v-grid :data="data" :columnNum="3"></v-grid>
    <div class="sub-title">columnNum="4"</div>
    <v-grid :data="data" :columnNum="4"></v-grid>
    <div class="sub-title">no border</div>
    <v-grid :data="data" :columnNum="4" :hasLine="false"></v-grid>
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
