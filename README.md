# vue-winbox

Vue components inside [WinBox.js](https://github.com/nextapps-de/winbox).

// TODO: Demo

## Install

```bash
yarn add vue-winbox
```

## Usage

```html
<template>
  <VueWinBox ref="winboxRef" :options="options">
    <SomeComponent :count="count" />
  </VueWinBox>
</template>

<script>
import { defineComponent, ref } from 'vue'
import VueWinBox from 'vue-winbox'
import SomeComponent from './components/SomeComponent.vue'

export default defineComponent({
  components: {
    VueWinBox,
    SomeComponent
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
      winboxRef.value.value?.winbox?.setTitle('Count ' + count.value)
    }, 500)

    return {
      count,
      options,
      winboxRef
    }
  }
})
</script>
```

## Props

All WinBox.js props

## Methods

All WinBox.js methods

## Events

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`onresize` | Function | - | Description |

## Credits

- [WinBox.js](https://github.com/nextapps-de/winbox) - Modern HTML5 window manager for the web.
- [vue-demi](https://github.com/vueuse/vue-demi/) - Creates Universal Library for Vue 2 & 3

## License
MIT - Copyright (c) 2021 [Robert Soriano](https://github.com/wobsoriano)
