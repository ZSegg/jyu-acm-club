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
        <button class="homePage-navbar__button-login" @click="loginHandler">登录</button>
        <button class="homePage-navbar__button-register" @click="registerHandler">
          注册
        </button>
      </div>
    </div>
  </nav>
  <acmDialog v-model="dialogVisible">
    <div class="homePage-navbar__dialog">
      <acmSwitch
        class="homePage-navbar__dialog-switch"
        active-text="登录"
        inactive-text="注册"
        v-model="flag"
      />

      <div class="homePage-navbar__dialog-content">
        <form v-if="flag" @submit.prevent="loginSubmit" class="homePage-navbar__login">
          <div>
            <label for="username">账号：</label>
            <input
              v-model="formData.usename"
              id="username"
              type="text"
              placeholder="请输入你的账号"
            />
          </div>
          <div>
            <label for="password">密码：</label>
            <input
              v-model="formData.password"
              id="password"
              type="password"
              placeholder="请输入你的密码"
            />
          </div>
          <button>登录</button>
        </form>
        <form v-else @submit.prevent="registerSubmit" class="homePage-navbar__register">
          <div>
            <label for="username">账号：</label>
            <input
              v-model="formData.usename"
              id="username"
              type="text"
              placeholder="请输入你的账号"
            />
          </div>
          <div>
            <label for="password">密码：</label>
            <input
              v-model="formData.password"
              id="password"
              type="password"
              placeholder="请输入你的密码"
            />
          </div>
          <div>
            <label for="email">邮箱：</label>
            <input
              v-model="formData.email"
              id="email"
              type="email"
              placeholder="请输入你的邮箱"
            />
          </div>
          <button>注册</button>
        </form>
      </div>
    </div>
  </acmDialog>
</template>

<script setup lang="js">
import { reactive, ref,watch } from 'vue'
import acmDialog from '../commons/dialog.vue'
import acmSwitch from '../commons/switch.vue'
import { useAuthStore } from '@/stores/useAuthStore'

const dialogVisible = ref(false)

const authStore = useAuthStore()

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





const flag = ref(true);

const formData = reactive({
  usename:"",
  password:"",
  email:"",
})


const loginHandler = ()=>{
  dialogVisible.value = true
  flag.value = true
}

const registerHandler = ()=>{
  dialogVisible.value = true
  flag.value = false
}

// 当登录和注册切换的时候,清空 formData
watch(flag,(newValue,oldValue)=>{
  if(newValue!==oldValue){
    for(let key in formData){
      formData[key] = ""
    }
  }
})

const loginSubmit = async()=>{
  if(!formData.usename || !formData.password){
    alert("请填写用户名或密码")
    return
  }
  await authStore.login(formData.usename,formData.password);
  if(authStore.isLogin){
    dialogVisible.value = false
    alert("登录成功")
  }else{
    alert("登录失败")
  }
}

const registerSubmit = async ()=>{
  if(!formData.username || !formData.password || !formData.email){
    alert("请填写完整用户名、密码和邮箱")
    return
  }
  await authStore.register(formData.username,formData.password,formData.email);
  if(authStore.isLogin){
    dialogVisible.value = false
    alert("注册成功")
  }else{
    alert("注册失败")
  }
}
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
  height: $height-xl;
}

.homePage-navbar__logo {
  height: $height-lg;
  width: $width-lg;
  img {
    height: 100%;
    width: 100%;
  }
  padding: $padding-xs;
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

.homePage-navbar__dialog {
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: center;
  .homePage-navbar__dialog-switch {
    position: absolute;
    left: $space-sm;
    top: $space-sm;
  }
  .homePage-navbar__dialog-content {
    .homePage-navbar__login,
    .homePage-navbar__register {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: $space-md;
      div {
        width: 100%;
      }
      button {
        @extend .btn--primary;
      }
    }
  }
}
</style>
