<template>
  <VueWinBox ref="winboxRef" :options="options">
    <div>{{ count }}</div>
  </VueWinBox>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
import VueWinBox from 'vue-winbox'

export default defineComponent({
  components: { VueWinBox },
  data: () => ({
      count: 0,
      options: {
          title: 'Current count: 0',
          class: 'modern'
      }
  }),
  mounted() {
    setInterval(() => {
      this.count++
      this.$refs?.winboxRef.winbox?.setTitle('Current count: ' + this.count)
    }, 500)
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