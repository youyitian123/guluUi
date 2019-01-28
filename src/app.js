import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import chai from 'chai'
import spies from 'chai-spies'
import Input from './input'

chai.use(spies)
const expect = chai.expect

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-input', Input)

new Vue({
    el: '#app',
    data: {
        loading1: true
    }
})