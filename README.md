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
    <div>{{ count }}</div>
  </VueWinBox>
</template>

<script>
import { defineComponent, ref } from 'vue'
import VueWinBox from 'vue-winbox'

export default defineComponent({
  components: { VueWinBox },
  setup() {
    const count = ref(0)
    const options = {
      title: 'Current count: 0',
      class: 'modern',
    }
    const winboxRef = ref()

    setInterval(() => {
      count.value++
      winboxRef.value?.winbox?.setTitle('Current count: ' + count.value)
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

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`options` | Object | [Reference](https://github.com/nextapps-de/winbox#options) | WinBox options. This is only applied on initial mount.  |
`portalComponent` | String | `portal` | Portal component name |
`portalSelector` | String | `selector` | Portal component selector attribute  |
`portalAttributes` | Object | `{}` | Other attributes |

## Methods

All WinBox.js methods

## Events

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`onresize` | Function | - | Fired when the window resizes. |
`onclose` | Function | - | Fired when the window is closing. |
`onfocus` | Function | - | Fired when the window is in focus. |
`onblur` | Function | - | - |
`onmove` | Function | - | Fired when the window moves. |

## Credits

- [WinBox.js](https://github.com/nextapps-de/winbox) - Modern HTML5 window manager for the web.
- [vue-demi](https://github.com/vueuse/vue-demi/) - Creates Universal Library for Vue 2 & 3

## License
MIT - Copyright (c) 2021 [Robert Soriano](https://github.com/wobsoriano)
