<template>
  <div class="acm-switch">
    <input class="acm-switch__input" type="checkbox" v-model="active" />

    <div
      class="acm-switch__core"
      :class="{
        'acm-switch__core--inactive': !active,
      }"
    >
      <div class="acm-switch__inner">
        <span class="acm-switch__text">{{
          active ? props.activeText : props.inactiveText
        }}</span>
      </div>
      <div class="acm-switch__action"></div>
    </div>
  </div>
</template>

<script setup lang="js">

const active = defineModel();


const props = defineProps({
     activeText: {
       type: String,
       default: '开'
     },
     inactiveText: {
       type: String,
       default: '关'
     },
})
</script>
<style scoped lang="scss">
.acm-switch {
  position: relative;
  .acm-switch__input {
    opacity: 0;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    margin: 0;
    position: absolute;
    z-index: 100;
  }
}
.acm-switch__core {
  position: relative;
  width: $width-xl; // 64px
  height: $height-md;
  padding: $padding-sm $padding-xs;

  display: flex;
  align-items: center;
  background-color: $primary-color;
  border-radius: $radius-2xl;

  transition: $transition-duration-base;
  pointer-events: none; /* 禁用点击事件，让点击穿透到 input */
  .acm-switch__inner {
    width: $width-sm; // 25.6px
    text-align: center;
    position: absolute;

    left: $space-sm;
    transition: $transition-duration-base;
    .acm-switch__text {
      color: $white-smoke;
      font-size: $font-size-sm;
      user-select: none;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .acm-switch__action {
    width: $width-sm;
    height: $height-sm;
    position: absolute;
    right: $space-xs;
    border-radius: $radius-full;
    background-color: $white;
    transition: $transition-duration-base;
  }
  &.acm-switch__core--inactive {
    background-color: $gray;
    .acm-switch__inner {
      left: $space-sm + $width-sm;
    }
    .acm-switch__action {
      right: $space-sm + $width-sm;
    }
  }
}
</style>
