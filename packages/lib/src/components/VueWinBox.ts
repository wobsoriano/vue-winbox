import {
    defineComponent,
    PropType,
    isVue2,
    Teleport
} from 'vue-demi'
import { nanoid } from 'nanoid'

import h, { slot as slotDemi } from '../utils/h-demi'

declare const WinBox: WinBox.WinBoxConstructor

export default defineComponent({
    props: {
        options: {
            type: Object as PropType<WinBox.Params>,
            required: true
        },
        portalSelector: {
            type: String,
            required: false,
            default: 'selector'
        },
        portalComponent: {
            type: String,
            required: false,
            default: 'portal'
        },
        portalAttributes: {
            type: Object,
            required: false,
            default: () => {}
        }
    },
    emits: [
        'onmove',
        'onresize',
        'onclose',
        'onfocus',
        'onblur'
    ],
    data() {
        return {
            winbox: null as WinBox | null,
            initialized: false,
            selector: 'vuewinbox-' + nanoid()
        }
    },
    mounted() {
        this.winbox = new WinBox({
            onresize: (width, height) => {
                this.$emit('onresize', {
                    id: this.winbox?.id,
                    width,
                    height
                })
            },
            onclose: () => {
                this.$emit('onclose', { id: this.winbox?.id })
                this.initialized = false
                return false
            },
            onfocus: () => {
                this.$emit('onfocus', { id: this.winbox?.id })
            },
            onblur: () => {
                this.$emit('onblur', { id: this.winbox?.id })
            },
            onmove: (x, y) => {
                this.$emit('onmove', {
                    id: this.winbox?.id,
                    x,
                    y
                })
            },
            ...this.options,
            id: this.selector
        })
        this.initialized = true
    },
    unmounted() {
        this.winbox?.close()
    },
    render() {
        const slot = this.$slots.default ? slotDemi(this.$slots.default) : []
        const attr: Record<string, any> = {}
        const winboxId = `#${this.selector} .wb-body`
        const component = isVue2 ? this.portalComponent : Teleport

        if (isVue2) {
            attr.attrs = {
                ...this.portalAttributes,
                [this.portalSelector]: winboxId
            }
        } else {
            attr.to = winboxId
        }

        return this.initialized ? h(component, attr, slot) : null
    }
})