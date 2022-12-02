import type { PropType } from 'vue'
import { Teleport, defineComponent, h, onMounted, onUnmounted, ref } from 'vue'
import { nanoid } from 'nanoid'

declare const WinBox: WinBox.WinBoxConstructor

export const VueWinBox = defineComponent({
  props: {
    options: {
      type: Object as PropType<WinBox.Params>,
      required: true,
    },
  },
  emits: [
    'onmove',
    'onresize',
    'onclose',
    'onfocus',
    'onblur',
  ],
  setup(props, { slots, emit, expose }) {
    const selector = `vuewinbox-${nanoid()}`
    const winbox = ref<WinBox | null>(null)
    const initialized = ref(false)

    expose({
      selector,
      winbox,
      initialized,
    })

    function initialize() {
      if (initialized.value) {
        console.error('Please close the window first before reinitializing.')
        return
      }

      winbox.value = new WinBox({
        onresize: (width: number, height: number) => {
          emit('onresize', {
            id: winbox.value?.id,
            width,
            height,
          })
        },
        onclose: () => {
          emit('onclose', { id: winbox.value?.id })
          initialized.value = false
          winbox.value = null
          return false
        },
        onfocus: () => {
          emit('onfocus', { id: winbox.value?.id })
        },
        onblur: () => {
          emit('onblur', { id: winbox.value?.id })
        },
        onmove: (x: number, y: number) => {
          emit('onmove', {
            id: winbox.value?.id,
            x,
            y,
          })
        },
        ...props.options,
        id: selector,
      })
      initialized.value = true
    }

    onMounted(() => {
      initialize()
    })

    onUnmounted(() => {
      winbox.value?.close()
    })

    return () => initialized.value
    // @ts-expect-error: TODO
      ? h(Teleport, {
        to: `#${selector} .wb-body`,
      }, slots.default?.())
      : null
  },
})
