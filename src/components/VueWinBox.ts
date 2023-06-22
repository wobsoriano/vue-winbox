import type { PropType } from 'vue'
import { Teleport, defineComponent, h, onMounted, onScopeDispose, ref, toRaw } from 'vue'
import { nanoid } from 'nanoid'

declare const WinBox: WinBox.WinBoxConstructor

export const VueWinBox = defineComponent({
  props: {
    options: {
      type: Object as PropType<WinBox.Params>,
      required: true,
    },
    openOnMount: {
      type: Boolean,
      default: true,
    },
  },
  emits: [
    'move',
    'resize',
    'close',
    'focus',
    'blur',
  ],
  setup(props, { slots, emit, expose }) {
    const selector = `vuewinbox-${nanoid()}`
    const winbox = ref<WinBox | null>(null)
    const initialized = ref(false)

    expose({
      selector,
      winbox,
      initialized,
      initialize,
    })

    function initialize() {
      if (initialized.value) {
        console.error('Please close the window first before reinitializing.')
        return
      }

      winbox.value = new WinBox({
        onresize: (width: number, height: number) => {
          emit('resize', {
            id: winbox.value?.id,
            width,
            height,
          })
        },
        onclose: () => {
          emit('close', { id: winbox.value?.id })
          initialized.value = false
          winbox.value = null
          return false
        },
        onfocus: () => {
          emit('focus', { id: winbox.value?.id })
        },
        onblur: () => {
          emit('blur', { id: winbox.value?.id })
        },
        onmove: (x: number, y: number) => {
          emit('move', {
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
      if (!props.openOnMount)
        return
      initialize()
    })

    onScopeDispose(() => {
      toRaw(winbox.value)?.close()
    })

    return () => initialized.value
    // @ts-expect-error: TODO
      ? h(Teleport, {
        to: `#${selector} .wb-body`,
      }, slots.default?.())
      : null
  },
})
