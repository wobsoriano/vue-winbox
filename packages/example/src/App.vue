<template>
  <VueWinBox ref="winboxRef" :options="options">
    <Counter @update:count="setTitle" />
  </VueWinBox>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
import VueWinBox from 'vue-winbox'
import Counter from './components/Counter.vue'

export default defineComponent({
  components: {
    VueWinBox,
    Counter
  },
  setup() {
    const options = {
      title: 'Count: 0',
      class: 'modern',
      x: 'center',
      y: 'center',
      width: '50%',
      height: '50%'
    }
    const winboxRef = ref()

    const setTitle = (count: number) => {
      winboxRef.value?.winbox?.setTitle('Count: ' + count)
    }

    const handleResize = () => {
      winboxRef.value?.winbox?.resize("50%", "50%").move("center", "center")
    }

    onMounted(() => {
      window.addEventListener('resize', handleResize)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', handleResize)
    })

    return {
      options,
      winboxRef,
      setTitle
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