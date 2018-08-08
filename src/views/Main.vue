npm<template>
  <div>
    <Tabs></Tabs>
    <div class="content">
      <transition>
        <router-view></router-view>
      </transition>
    </div>

  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Tabs from '@/components/Tabs.vue';
  @Component({
      components:{
          Tabs
      }
  })
  export default class Main extends Vue {
  }
</script>

<style scoped>

</style>