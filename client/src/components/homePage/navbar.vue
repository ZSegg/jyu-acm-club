<template>
  <nav class="homePage-navbar">
    <div class="homePage-navbar__info">
      <!-- 圆形Logo容器 -->
      <div class="homePage-navbar__logo">
        <img src="@/assets/logo.png" alt="网站Logo" />
      </div>

      <div class="homePage-navbar__title">ACM算法协会</div>
    </div>

    <div class="homePage-navbar__menu">
      <ul class="homePage-navbar__menu-list">
        <li
          v-for="(item, index) in items"
          :key="index"
          class="homePage-navbar__menu-item"
          :class="{ active: item.isSelected }"
        >
          <RouterLink :to="item.to" class="homePage-navbar__menu-link">
            {{ item.name }}
          </RouterLink>
        </li>
      </ul>

      <div class="homePage-navbar__button">
        <button class="homePage-navbar__button-login">登录</button>
        <button class="homePage-navbar__button-register">注册</button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="js">
import { computed, ref } from 'vue'

const items = ref([
  {
    name:'首页',
    to:'/',
    isSelected: true,
  },{
    name:'比赛列表',
    to:'/contest',
    isSelected: false,
  },{
    name:'排行榜',
    to:'/rank',
    isSelected: false,
  }
])
</script>

<style scoped lang="scss">
.homePage-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: $padding-lg $padding-xl;
  background-color: $white;
  height: $height-md;
}
.homePage-navbar__info {
  display: flex;
  align-items: center;
  gap: $space-md;
  overflow: hidden;
  height: $height-xl;
}

.homePage-navbar__logo {
  height: $height-lg;
  width: $width-lg;
  img {
    height: 100%;
    width: auto;
  }
  padding: $padding-xs;
  // border: 1px solid $black;
  border-radius: $radius-full;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); /* 阴影效果 */
}

.homePage-navbar__title {
  font-size: $font-size-lg;
  font-weight: 500;
}
.homePage-navbar__menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: $space-2xl;
  font-size: $font-size-sm;
}
.homePage-navbar__menu-list {
  display: flex;
  align-items: center;
  gap: $space-xl;
  list-style: none;
}
.homePage-navbar__menu-item {
  font-weight: 500;
  color: $gray-800;

  &:hover {
    color: $primary-color;
  }
  &.active {
    color: $primary-color;
    font-weight: 700;
  }
  &.active::after {
    content: "";
    display: block;
    width: 100%;
    height: 0.5px;
    background-color: $primary-color;
    margin-top: $space-xs;
  }
}
.homePage-navbar__menu-link {
  display: block;
  text-decoration: none;
  color: inherit;
}
.homePage-navbar__button {
  display: flex;
  align-items: center;
  gap: $space-md;
}
.homePage-navbar__button-login,
.homePage-navbar__button-register {
  border: 1px solid black;
  padding: $padding-base $padding-lg;
  border-radius: $radius-2xl;
}

.homePage-navbar__button-register {
  color: $white;
  background-color: $primary-color;
}
</style>
