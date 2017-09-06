<template>
  <div class="grid-demo">
    <p class="title">基础布局</p>
    <v-row>
      <v-col><div class="col-content bg-purple"></div></v-col>
    </v-row>
    <v-row>
      <v-col><div class="col-content bg-purple"></div></v-col>
      <v-col><div class="col-content bg-purple-light"></div></v-col>
    </v-row>
    <v-row>
      <v-col><div class="col-content bg-purple"></div></v-col>
      <v-col><div class="col-content bg-purple-light"></div></v-col>
      <v-col><div class="col-content bg-purple"></div></v-col>
    </v-row>
    <p class="title">分栏间隔</p>
    <v-row :gutter="10">
      <v-col><div class="col-content bg-purple"></div></v-col>
      <v-col><div class="col-content bg-purple"></div></v-col>
      <v-col><div class="col-content bg-purple"></div></v-col>
      <v-col><div class="col-content bg-purple"></div></v-col>
    </v-row>
    <p class="title">混合布局</p>
    <v-row :gutter="10">
      <v-col :percent="20"><div class="col-content bg-purple"></div></v-col>
      <v-col :percent="60"><div class="col-content bg-purple"></div></v-col>
      <v-col :percent="20"><div class="col-content bg-purple"></div></v-col>
    </v-row>
    <v-row :gutter="10">
      <v-col :percent="20"><div class="col-content bg-purple"></div></v-col>
      <v-col :percent="20"><div class="col-content bg-purple"></div></v-col>
      <v-col :percent="30"><div class="col-content bg-purple"></div></v-col>
      <v-col :percent="30"><div class="col-content bg-purple"></div></v-col>
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
  .grid-demo {
    margin-left: 15px;
    margin-right: 15px;

    .title {
      font-size: 14px;
      color: #888;
    }

    .vm-row {
      margin-bottom: 15px;
    }

    .col-content {
      height: 30px;
      text-align: center;
    }

    .bg-purple {
      background-color: #d3dce6;
    }

    .bg-purple-light {
      background-color: #e5e9f2;
    }
  }
</style>
