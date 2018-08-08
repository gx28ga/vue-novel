<template>
  <div>
    <div class="section">
      <slider :slides="slides"></slider>
      <div class="announcement">
        <label>快讯</label>
        <span>{{announcement}}</span>
      </div>
    </div>
    <div class="section">
      <book-list heading="最新更新" :books="latestUpdated" @onBookSelect="preview()">

      </book-list>
    </div>
    <div class="section"></div>
  </div>
</template>
<style>
  .announcement {
    font-size: 12px;
    padding:5px;
    background:#fff;
  }

  .announcement > label {
    padding: 3px 10px;
    margin: 3px 10px;
    background: #FACCB7;
    border-radius: 3px;
    color: #FF5102;

  }

  .announcement > span {
    padding: 3px 10px;
    color: #333;
    display:inline-block;
  }
</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Announcement from './Announcement.vue';
import BookList from './BookList.vue';
import Slider from './Slider.vue';

@Component({
  components:{
    Announcement,
    BookList,
    Slider,
  }
})
export default class Home extends Vue {
    created(){

        this.axios.get('/api/home').then((response)=>{

            let data=response.data;
            this.announcement=data.announcement
            this.slides=data.slides
            this.latestUpdated=data.latestUpdated
        })
    }
    private preview(){
        alert(1)
    }
    private slides: any[] = []
    private  announcement :string = ''

    private latestUpdated: any[] = []

}
</script>
