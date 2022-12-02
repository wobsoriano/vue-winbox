<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const emit = defineEmits<{
  (e: 'update:count', count: number): void
}>()

const count = ref(0)

const increment = () => {
  count.value++
}

const decrement = () => {
  if (count.value === 0)
    return
  count.value--
}

watchEffect(() => {
  emit('update:count', count.value)
})
</script>

<template>
  <div class="counter">
    <h1 class="count" v-text="count" />
    <div class="button__wrapper">
      <button @click="decrement">
        -
      </button>
      <button @click="increment">
        +
      </button>
    </div>
  </div>
</template>

<style>
.counter {
font-family: Montserrat, sans-serif;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 2rem;
height: 100%;
background-color: linear-gradient(135deg, #0d1117, #131820);;
color: #425a65;
}

h1 {
font-size: 6rem;
}

.button__wrapper {
display: flex;
gap: 1rem;
}
.button__wrapper > * {
border: none;
background-color: white;
box-shadow: 0px 0px 10px #cfd8dc;
font-weight: bold;
font-size: 2rem;
color: inherit;
border-radius: 50%;
outline: none;
height: 4rem;
width: 4rem;
cursor: pointer;
transition: background-color 250ms ease-in-out, transform 50ms ease-in-out;
}
.button__wrapper > *:hover {
background-color: #cfd8dc;
}
.button__wrapper > *:active {
transform: scale(0.9);
}
.button__wrapper > *:focus {
box-shadow: 0 0 0 3px #425a65;
}

.count {
color: #fff;
animation: pulse 500ms ease-in-out;
}

@keyframes pulse {
0%,
100% {
  transform: scale(1);
}
50% {
  transform: scale(1.2);
}
}
</style>
