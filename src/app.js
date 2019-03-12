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
import Tabs from './tabs'
import tabsHead from './tabs-head'
import tabsItem from './tabs-item'
import tabsBody from './tabs-body'
import tabsPane from './tabs-pane'
import Popover from './popover'
import Collapse from './collapse'
import collapseItem from './collapse-item'


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
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', tabsHead)
Vue.component('g-tabs-item', tabsItem)
Vue.component('g-tabs-body', tabsBody)
Vue.component('g-tabs-pane', tabsPane)
Vue.component('g-popover', Popover)
Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item', collapseItem)



new Vue({
    el: '#app',
    data: {
        selectedTab: '1'
    },
    created() { },
    methods: {
        showToast() {
            this.$toast('我是 message', {
                autoClose: false,
                position: 'top',
                // type:'error',
                closeButton: {
                    text: '知道了',
                    callback(toast) {
                        console.log('测试')
                    }
                }
            })
        }
    }
})