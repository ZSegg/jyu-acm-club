<template>
  <div class="homePage-statistics">
    <img class="homePage-statistics__content" src="@/assets/statistics.png" />
  </div>
</template>

<script setup lang="js"></script>
<style scoped lang="scss">
.homePage-statistics {
  width: 100%;
  height: $height-container;
  padding: $padding-6xl $padding-3xl;
  img {
    width: 100%; /* 或指定具体宽度 */
    height: auto; /* 保持比例 */
    object-fit: contain; /* 确保完整显示图片 */
  }
}
</style>
