<template>
  <main class="homepage-hero">
    <section class="homepage-hero__content">
      <div class="homepage-hero__section-title">
        <img src="@/assets/section-title.png" alt="section-title" />
      </div>
      <div class="homepage-hero__button">
        <button class="homepage-hero__button-join">立刻加入</button>
      </div>
    </section>
    <div class="homepage-hero__placeholder">
      <img src="@/assets/placeholder.png" />
    </div>
  </main>
</template>

<script setup lang="js"></script>
<style scoped lang="scss">
.homepage-hero {
  left: 0px;
  top: $space-4xl;
  width: 100%;
  opacity: 1;
  background: $white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: $padding-6xl $padding-4xl;
  box-sizing: border-box;
}

.homepage-hero__content {
  width: 43%;
  height: $height-container-xs;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  .homepage-hero__section-title {
    width: 100%;
    img {
      max-width: 100%; // 防止图片超出容器宽度
      max-height: 100%; // 防止图片超出容器高度
      object-fit: contain; // 确保图片完整显示在容器内
      width: auto; // 重置宽度，让图片按原始尺寸显示
      height: auto; // 重置高度，让图片按原始尺寸显示
      transform: scale(1.1); // 缩放倍数（0.5 = 50%，1.2 = 120%）
      transform-origin: center center; // 从中心缩放
    }
  }
  .homepage-hero__button {
    height: $height-xl;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: $padding-md 0px 0px 0px;
    .homepage-hero__button-join {
      @extend .btn--primary;
    }
  }

  // border: 1px solid black;
}

.homepage-hero__placeholder {
  width: 40%;
  height: $height-container;
  display: flex;
  justify-content: center;
  img {
    max-width: 100%; // 防止图片超出容器宽度
    max-height: 100%; // 防止图片超出容器高度
    object-fit: contain; // 确保图片完整显示在容器内
    width: auto; // 重置宽度，让图片按原始尺寸显示
    height: auto; // 重置高度，让图片按原始尺寸显示
    transform: scale(1); // 缩放倍数（0.5 = 50%，1.2 = 120%）
    transform-origin: center center; // 从中心缩放
  }
  // border: 1px solid black;
}
</style>
