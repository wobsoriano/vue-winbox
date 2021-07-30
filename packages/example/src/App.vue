<template>
  <VueWinBox ref="winboxRef" :options="options">
    <div>{{ count }}</div>
  </VueWinBox>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import VueWinBox from 'vue-winbox'

export default defineComponent({
  components: {
    VueWinBox
  },
  setup() {
    const count = ref(0)
    const options = ref({
      title: 'Window',
      class: 'modern',
    })
    const winboxRef = ref()

    setInterval(() => {
      count.value++
      winboxRef.value?.winbox?.setTitle('Window XP ' + count.value)
    }, 500)

    return {
      count,
      options,
      winboxRef
    }
  }
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  height: 100vh;
}
</style>