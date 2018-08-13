<template>
  <div class="dialog">
    <div>
      <slot name="header"></slot>
    </div>
    <div>
      <slot>123</slot>
    </div>

  </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
  export default class Dialog extends Vue{
    private isOpen=false;
    open(){
        if(!this.isOpen){
            this.$emit('dialogOpen');
        }
        this.isOpen=true;
    }
    close(){
        if(this.isOpen){
            this.$emit('dialogClose');

        }
        this.isOpen=false;

    }
  }
</script>

<style scoped lang="scss">
  .dialog{
    position: absolute;
    top: 24px;
    left: 24px;
    right: 24px;
    bottom: 24px;
    display: none;
    background: #ffffff;
    -webkit-box-shadow: inset 0 0 10px rgba(0,0,0,.3);
    -moz-box-shadow: inset 0 0 10px rgba(0,0,0,.3);
    box-shadow: inset 0 0 10px rgba(0,0,0,.3);
    z-index: 500;
  }
</style>