<template>
  <div class="demo-wingblank">
    <div class="btn-container">
      <v-button class="btn" type="primary">primary button</v-button>
      <v-button class="btn" disabled>disabled button</v-button>
      <v-button class="btn" loading>(icon) loading button</v-button>

      <div style="height: .16rem;" />

      <p>inline / small</p>
      <div class="demo-flexbox">
        <v-button class="btn" type="primary" inline>inline</v-button>
        <v-button class="btn" type="ghost" inline>inline</v-button>
        <v-button class="btn" type="warning" inline>inline</v-button>
      </div>
      <div class="demo-flexbox">
        <v-button class="btn" type="primary" inline size="small">inline small</v-button>
        <v-button class="btn" type="ghost" inline size="small">inline small</v-button>
        <v-button class="btn" type="warning" inline size="small">inline small</v-button>
      </div>
    </div>
  </div>
</template>
<script>
  import VButton from '../'
  export default {
    components: {
      VButton
    }
  }
</script>

<style lang="less">
  .demo-wingblank {
    margin: 0 .3rem;
  }

  .demo-flexbox {
    display: flex;
    align-items: center;
  }

  .btn-container .btn {
    margin: .16rem .13rem 0;
  }
</style>

