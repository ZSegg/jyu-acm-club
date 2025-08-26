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
  width: min(90vw, 500px);
  max-height: 80vh;
  transform: translate(-50%, -50%) scale(1);
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  overflow-y: auto;

  opacity: 0;
  transform: translate(-50%, -50%) scale(0.95);
  animation: dialog-fade-in 0.25s ease forwards;
}

@keyframes dialog-fade-in {
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}

.acm-dialog__close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2.25rem;
  height: 2.25rem;
  border: none;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.05);
  cursor: pointer;
  font-size: 1.25rem;
  color: #333;
  transition: all 0.2s ease;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
    transform: rotate(90deg);
  }
}

</style>
