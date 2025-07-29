<template>
  <div class="homePage-coreValues">
    <div class="homePage-coreValues__frame">
      <h1 class="homePage-coreValues__title">Why Join ACM?</h1>
      <br />
      <p class="homePage-coreValues__description">
        ACM算法协会为你打造技术成长的最佳平台
      </p>
    </div>
    <div class="homePage-coreValues__row">
      <div class="homePage-coreValues__column">
        <img src="@/assets/value-icon1.png" alt="" />
        <h3>技术成长</h3>
        <p>提供算法竞赛训练、刷题打卡、技术讲座，助你夯实编程与思维能力。</p>
      </div>
      <div class="homePage-coreValues__column">
        <img src="@/assets/value-icon2.png" alt="" />
        <h3>成就展示</h3>
        <p>上传获奖证书，展示你的荣誉，让努力被更多人看见，自动参与排行榜评选。</p>
      </div>
      <div class="homePage-coreValues__column">
        <img src="@/assets/value-icon3.png" alt="" />
        <h3>社群交流</h3>
        <p>加入活跃的技术社区，与志同道合的伙伴切磋技术、交流经验、共同进步。</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="js"></script>
<style scoped lang="scss">
.homePage-coreValues {
  padding: $padding-6xl $padding-3xl;
  //   border: 1px solid black;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .homePage-coreValues__frame {
    display: flex;
    flex-direction: column;
    text-align: center;
    height: $height-5xl;
    width: $width-container-xl;
    margin-bottom: $margin-4xl;
    //     border: 1px solid black;
    .homePage-coreValues__title {
      display: block;
      height: $height-xl;
      font-size: $font-size-5xl;
      font-weight: $font-weight-semibold;
      line-height: $font-size-5xl;
      color: rgba(29, 30, 28, 1);
    }
  }
  .homePage-coreValues__row {
    display: flex;
    gap: $space-2xl;
    text-align: center;
    .homePage-coreValues__column {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: $width-xl;
        height: $height-xl;
        object-fit: cover;
        object-position: center;
        margin-bottom: $space-sm;
      }
      h3 {
        font-size: $font-size-4xl;
        margin-bottom: $margin-lg;
      }
    }
  }
}
</style>
