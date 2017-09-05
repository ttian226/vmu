<template>
  <div>
    <v-row>
      <v-col span="24"><div class="grid-content bg-purple-dark"></div></v-col>
    </v-row>
    <v-row>
      <v-col span="12"><div class="grid-content bg-purple"></div></v-col>
      <v-col span="12"><div class="grid-content bg-purple-light"></div></v-col>
    </v-row>
  </div>
</template>
<script>
import { VRow, VCol } from '../'
export default {
  components: {
    VRow,
    VCol
  }
}
</script>
<style lang="less">
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
