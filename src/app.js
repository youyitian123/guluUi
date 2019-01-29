import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import Input from './input'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-input', Input)

new Vue({
    el: '#app',
    data: {
        loading1: true,
        message: 'value'
    }
})