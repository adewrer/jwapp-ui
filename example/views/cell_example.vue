<template>
  <div class="home">
    <jwcell title="标题文字" icon="icon iconfont icon-shuizhi" isLink arrowIcon="icon iconfont icon-arrow-right-copy-copy"></jwcell>
    <div class="divider"></div>
    <jwcell title="标题文字" icon="icon iconfont icon-dilixinxi" isLink arrowIcon="icon iconfont icon-arrow-right-copy-copy"></jwcell>
    <div class="divider"></div>
    <jwcell title="标题文字" icon="icon iconfont icon-turang" isLink arrowIcon="icon iconfont icon-arrow-right-copy-copy"></jwcell>
    <div class="divider"></div>
    <jwcell title="标题文字" icon="icon iconfont icon-kongqizhiliang" isLink arrowIcon="icon iconfont icon-arrow-right-copy-copy"></jwcell>
    <div class="divider"></div>
    <jwcell title="标题文字" arrowIcon="icon iconfont icon-arrow-right-copy-copy"></jwcell>
    <div class="divider"></div>
    <jwcell title="主页" :to="{ name: 'example' }" isLink arrowIcon="icon iconfont icon-arrow-right-copy-copy"></jwcell>
    <div class="divider"></div>
    <jwcell title="标题文字"></jwcell>
  </div>
</template>

<script lang="js">
//import jwcell from '/packages/cell/cell.vue'; // @ is an alias to /src

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    
  },
}


</script>
<style lang="scss">
.home{
  background-color: #eeeeee;
  padding:16px;
}
  .divider{
    height: 1px;
    background-color: #eeeeee;
  }
</style>
