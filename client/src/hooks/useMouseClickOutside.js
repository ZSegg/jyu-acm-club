import { onMounted, onUnmounted } from "vue"

export function useMouseClickOutside(elementRef, callback) {
     console.log("elementRef: ", elementRef);
     const handler = (e) => {
          if (!elementRef.value || !e.target) return
          if (!elementRef.value.contains(e.target)) {

               console.log('在元素外')
               callback(e)
          } else {
               console.log('在元素内')
          }
     }
     onMounted(() => {
          document.addEventListener('click', handler)
     })
     onUnmounted(() => {
          document.removeEventListener('click', handler)
     })
}