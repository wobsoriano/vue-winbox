<template>
  <VueWinBox @onmove="onmove" ref="vwb" :options="options">
    <div style="height: 100%; width: 100%; background-color: red; color: white;">{{count}}</div>
  </VueWinBox>
  <button @click="doSmth">Do smth</button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useWinBox, VueWinBox } from 'vue-winbox'

export default defineComponent({
  name: 'App',
  components: {
    VueWinBox
  },
  setup() {
    const count = ref(0)
    const options = ref({
      title: 'Window',
      class: 'modern',
    })
    const vwb = ref()
    const createWinBox = useWinBox()

    setInterval(() => {
      count.value++
    }, 500)

    setInterval(() => {
      vwb.value?.winbox?.setTitle('Window XP ' + count.value)
    }, 500)

    const doSmth = () => {
      // vwb.value?.winbox?.minimize()
      const winbox = createWinBox({
        title: 'hello'
      })
      winbox.setUrl('https://nextapps-de.github.io/winbox/')
    }

    const onmove = ({ x, y }: { x: number, y: number }) => {
      // console.log(x, y)
    }

    return {
      count,
      options,
      vwb,
      doSmth,
      onmove
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