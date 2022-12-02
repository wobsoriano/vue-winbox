# vue-winbox

Vue 3 wrapper for [WinBox.js](https://github.com/nextapps-de/winbox).

Demo: https://vue-winbox.vercel.app

## Install

```bash
pnpm add vue-winbox
```

## Usage

```html
<script setup>
import { ref } from 'vue'
import { VueWinBox } from 'vue-winbox'

const count = ref(0)
const options = {
  title: 'Current count: 0',
  class: 'modern',
}
const wbRef = ref()

setInterval(() => {
  count.value++
  wbRef.value?.winbox?.setTitle(`Current count: ${count.value}`)
}, 500)
</script>

<template>
  <VueWinBox ref="wbRef" :options="options" @onmove="onMove">
    <div>Window 1: {{ count }}</div>
  </VueWinBox>
</template>
```

## Props

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`options` | Object | [Reference](https://github.com/nextapps-de/winbox#options) | WinBox options. Applied only on mount.  |
`portalComponent` | String | `portal` | Portal component name. Vue 2 only. |
`portalSelector` | String | `selector` | Portal component selector attribute. Vue 2 only.  |
`portalAttributes` | Object | `{}` | Other attributes. Vue 2 only. |


## Methods

To update props and access methods/controls, just add a `ref` to the `VueWinBox` component and use it like how you would with `WinBox.js`:

```ts
// Set the window title
wbRef.value.winbox.setTitle('New title')

// Custom Position / Size
wbRef.value.winbox.resize('50%', '50%').move('center', 'center')

// Add class
wbRef.value.winbox.addClass('modern')

// Focus a window (bring up to front)
wbRef.value.winbox.focus()

// Chaining Methods
wbRef.value.winbox
  .setTitle('Title')
  .resize('50%', '50%')
  .move('center', 'center')
  .focus()
```

To reinitialize a closed window:

```javascript
wbRef.value.winbox.initialize()
```

## Events

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`resize` | Function | - | Fired when the window resizes. |
`close` | Function | - | Fired when the window is closing. |
`focus` | Function | - | Fired when the window is in focus. |
`blur` | Function | - | - |
`move` | Function | - | Fired when the window moves. |


## Vanilla WinBox.js

```ts
import { useWinBox } from 'vue-winbox'

const createWindow = useWinBox()

const generate = () => {
  const winbox = createWindow({
    title: 'Window title',
  })
  winbox.fullscreen()
}
```

## License
MIT
