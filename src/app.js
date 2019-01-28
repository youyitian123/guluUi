import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)

var expect = chai.expect;

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)

new Vue({
    el: '#app',
    data: {
        loading1: true
    }
})



