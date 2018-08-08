<template>
  <div class="tabs">
    <ul >
      <router-link :to="{name: 'Home'}" tag="li">
        <div><i class="iconfont icon-shouye"></i></div>
        <div>首页</div>
      </router-link>
      <router-link :to="{name: 'Category'}" tag="li">
        <div><i class="iconfont icon-daohangfenlei"></i></div>
        <div>分类</div>
      </router-link>
      <router-link :to="{name: 'Cart'}" tag="li">
        <div><i class="iconfont icon-gouwuche"></i></div>
        <div>购物车</div>
      </router-link>
      <router-link :to="{name: 'Me'}" tag="li">
        <div><i class="iconfont icon-wode"></i></div>
        <div>我</div>
      </router-link>
    </ul>
  </div>
</template>

<script>
  import {Component,Vue} from 'vue-property-decorator';
  import '@/assets/fonts/iconfont/iconfont.css';
  @Component
    export default class Tabs extends Vue {

    }
</script>

<style lang="scss">
  .tabs {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
    box-shadow: 0 2px 4px #000;
    width: 100%;

    & > ul, & > ul > li {
      margin: 0;
      padding: 0;
    }

    ul {
      display: table;
      width: 100%;
      & > li {
        text-align: center;
        font-size: 10px;
        display: table-cell;
        padding: 8px 12px;
        .iconfont{
          font-size: 24px;
        }
        &.active {
          color: #D0021B;
        }


      }
    }
  }

</style>