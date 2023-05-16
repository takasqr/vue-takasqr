<script>
import { ref, computed, onMounted, watch } from 'vue'

export default {
  props: {
    number: Number,
    min: Number,
    max: Number
  },
  setup(props, context) {
    let step = ref(5)

    onMounted(() => {
      step.value = props.number
    })

    watch(step, (step, prevStep) => {

      context.emit('update', step)
    })

    function decrement () {
      if (step.value > props.min) {
        step.value--
      }
    }

    function increment () {
      if (step.value < props.max) {
        step.value++
      }
    }

    return { step, decrement, increment }
  }
}
</script>

<template>
  <v-slider
    v-model="step"
    track-color="grey"
    :min=min
    :max=max
    :step="1"
  >
    <template v-slot:prepend>
      <v-btn
        size="small"
        variant="text"
        icon="mdi-minus"
        @click="decrement"
      ></v-btn>
    </template>

    <template v-slot:append>
      <v-btn
        size="small"
        variant="text"
        icon="mdi-plus"
        @click="increment"
      ></v-btn>
    </template>
  </v-slider>
</template>