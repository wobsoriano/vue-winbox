# vue-winbox

Vue 3 wrapper for [WinBox.js](https://github.com/nextapps-de/winbox).

Demo: https://wobsoriano.github.io/vue-winbox/

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
const winboxRef = ref()
const winboxRef2 = ref()

setInterval(() => {
  count.value++
  winboxRef.value?.winbox?.setTitle(`Current count: ${count.value}`)
  winboxRef2.value?.winbox?.setTitle(`Current count: ${count.value}`)
}, 500)
</script>

<template>
  <VueWinBox ref="winboxRef" :options="options" @onmove="onMove">
    <div>Window 1: {{ count }}</div>
  </VueWinBox>
  <VueWinBox ref="winboxRef2" :options="options" @onmove="onMove">
    <div>Window 2: {{ count }}</div>
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
winboxRef.value.winbox.setTitle('New title')

// Custom Position / Size
winboxRef.value.winbox.resize('50%', '50%').move('center', 'center')

// Add class
winboxRef.value.winbox.addClass('modern')

// Focus a window (bring up to front)
winboxRef.value.winbox.focus()

// Chaining Methods
winboxRef.value.winbox
  .setTitle('Title')
  .resize('50%', '50%')
  .move('center', 'center')
  .focus()
```

To reinitialize a closed window:

```javascript
winboxRef.value.winbox.initialize()
```

## Events

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`onresize` | Function | - | Fired when the window resizes. |
`onclose` | Function | - | Fired when the window is closing. |
`onfocus` | Function | - | Fired when the window is in focus. |
`onblur` | Function | - | - |
`onmove` | Function | - | Fired when the window moves. |


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
