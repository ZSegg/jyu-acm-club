<template>
  <div ref="dialogRef" class="acm-dialog" v-if="visible">
    <button class="acm-dialog__close" @click.prevent="visible = false">×</button>
    <slot />
  </div>
</template>

<script setup lang="js">
import { ref} from 'vue';

const visible = defineModel(true)
const dialogRef = ref(null);
const dialogOpen = ()=>{
  visible.value = true
}

const dialogClose = ()=>{
  visible.value = false
}

const dialogToggle = ()=>{
  visible.value = !visible.value
}

defineExpose({
  dialogOpen,
  dialogClose,
  dialogToggle
})
</script>
<style scoped lang="scss">
.acm-dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 50vmin;
  height: 50vmin;
  transform: translate(-50%, -50%);
  z-index: 9999;
  border: 1px solid black;
  background-color: $white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.acm-dialog__close {
  position: absolute;
  right: $space-sm;
  top: $space-sm;
  width: $width-sm;
  height: $height-sm;
  @extend .btn--circle;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
