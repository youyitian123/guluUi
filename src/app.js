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



new Vue({
    el: '#app',
    data: {
        loading1: true,
        message: 'value'
    }
})