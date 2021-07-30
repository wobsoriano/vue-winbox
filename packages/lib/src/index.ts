import {
    Vue2,
    isVue2
} from 'vue-demi'
import 'winbox';

import VueWinBox from './components/VueWinBox'
import useWinBox from './composables/useWinBox'

declare const WinBox: WinBox.WinBoxConstructor;

if (isVue2) {
    Vue2.prototype.$WinBox = (options: WinBox.Params) => {
        return new WinBox({
            ...options
        })
    }
}

export {
    useWinBox
}

export default VueWinBox