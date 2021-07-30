<template>
    <VueWinBox @onmove="onmove" ref="vwb" :options="options">
      <div style="height: 100%; width: 100%; background-color: red; color: white;">{{count}}</div>
    </VueWinBox>
    <button @click="doSmth">Do smth</button>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  import { useWinBox, VueWinBox } from 'vue-winbox'
  
  export default defineComponent({
    name: 'App',
    components: {
      VueWinBox
    },
    data: () => ({
        count: 0,
        options: {
            title: 'Window',
            class: 'modern'
        }
    }),
    mounted() {
      setInterval(() => {
        this.count++
      }, 500)
    },
    methods: {
        onmove({ x, y }: { x: number, y: number }) {
            console.log(x, y)
        },
        doSmth() {
          const createWinBox = useWinBox()
          createWinBox({
            title: 'hello'
          })
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