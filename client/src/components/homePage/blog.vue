<template>
  <div class="homePage-Blog">
    <div class="homePage-Blog__title">
      <span>近期比赛推荐</span>
    </div>
    <div class="homePage-Blog__main">
      <div class="homePage-Blog__card-container">
        <div
          v-for="(item, index) in data"
          :key="index"
          class="homePage-Blog__card"
          :style="item.style"
        >
          <img class="homePage-Blog__card-img" :src="getImgUrl(item.img_url)" />
          <div class="homePage-Blog__card-content">
            <div class="homePage-Blog__card-info">
              <span class="homePage-Blog__card-tag">{{ item.tag }}</span>
              <span class="homePage-Blog__card-time">截止 {{ item.time }}</span>

              <h1 class="homePage-Blog__card-title">{{ item.title }}：</h1>
            </div>
          </div>
          <button class="homePage-Blog__card-button">详情 &gt;</button>
        </div>
      </div>
      <button class="homePage-Blog__button">查看全部</button>
    </div>
  </div>
</template>

<script setup lang="js">
import { reactive } from "vue";
let data = reactive([{
     tag: "校内赛",
     time: "7.25",
     title:"ACM 夏季编程挑战",
     img_url:"card1.png",
     style:{
      '--card-background-color': '#E6F0FF',
      '--card-tag-color':'#A6E8F6',
     }
},
{
     tag: "选拔赛",
     time: "7.25",
     title:"校赛选拔一期",
     img_url:"card2.png",
     style:{
      '--card-background-color': '#FFD9EB',
      '--card-tag-color': '#FCBEDC'
     }

},{
     tag:"趣味赛",
     time:"7.25",
     title:"趣味代码挑战",
     img_url:"card3.png",
     style:{
      '--card-background-color': '#E9FFBD',
      '--card-tag-color': '#D3F985'
     }
}]);

function getImgUrl(name){
     const url = new URL(`../../assets/${name}`,import.meta.url);
    //  console.log(url);
     return url.href;
}
</script>

<style scoped lang="scss">
.homePage-Blog {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: $padding-5xl $padding-3xl;
  height: $height-container-4xl;
  .homePage-Blog__title {
    text-align: center;
    width: $width-container;
    font-size: $font-size-5xl;
    height: $height-6xl;
    // background-color: red;
  }
  .homePage-Blog__main {
    width: 100%;
    // background-color: aqua;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
}

.homePage-Blog__main {
  .homePage-Blog__card-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    // background-color: blue;
    gap: $space-xl;
    .homePage-Blog__card {
      width: calc((100% - 2 * $space-xl) / 3);
      height: $height-container-sm;
      // background-color: yellow;
    }
  }
  .homePage-Blog__button {
    @extend .btn--primary;
    margin-top: $space-xl;
  }
}

.homePage-Blog__card {
  background-color: var(--card-background-color);
  position: relative;
  border-radius: $radius-xl;
  .homePage-Blog__card-img {
    width: 100%;
    height: 65%;
  }
  .homePage-Blog__card-button {
    background-color: inherit;
    position: absolute;
    bottom: $space-md;
  }
  .homePage-Blog__card-content {
    margin-top: $space-sm;
    .homePage-Blog__card-info {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: fit-content;
      gap: $space-md;
      font-size: $font-size-sm;
      flex-wrap: wrap; /* 允许换行 */
      .homePage-Blog__card-tag {
        border-radius: $radius-md;
        padding: $padding-xs $padding-sm;
        background-color: var(--card-tag-color);
      }
      .homePage-Blog__card-title {
        width: 100%;
        // letter-spacing: $space-xs;
      }
    }
  }
}
</style>
