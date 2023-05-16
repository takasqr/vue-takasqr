<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  setup() {
    let customHeight = ref(100)

    // 高さ調整用
    let adjustmentRef = ref(null)
    let observer = null;

    onMounted(() => {
      observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
              customHeight.value = adjustmentRef.value.offsetHeight;
          }
        });
      });

      observer.observe(adjustmentRef.value, { attributes: true, childList: true, subtree: true });
    });

    onUnmounted(() => {
      if (observer) {
          observer.disconnect();
      }
    });

    return { adjustmentRef, customHeight }
  }
}
</script>

<template>
  <div :style="{ height: customHeight + 'px' }">
  <v-app>
    <div ref="adjustmentRef">
        <slot></slot>
    </div>
  </v-app>
  </div>
</template>
