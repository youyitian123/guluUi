import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import Input from './input'
import Row from './row'
import Col from './col'
import layout from './layout'
import header from './header'
import footer from './footer'
import sider from './sider'
import content from './content'
import toast from './toast'
import Plugin from './plugin'


Vue.use(Plugin)

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', layout)
Vue.component('g-header', header)
Vue.component('g-footer', footer)
Vue.component('g-sider', sider)
Vue.component('g-content', content)
Vue.component('g-toast', toast)




new Vue({
    el: '#app',
    data: {
        loading1: true,
        message: 'value'
    },
    created() {
        this.$toast('我是 message', {
            closeButton: {
                text: '知道了',
                callback(toast) {
                    toast.log()
                }
            }
        })
    },
    methods: {
        showToast() {}
    }
})