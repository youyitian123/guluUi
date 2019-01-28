import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import chai from 'chai'
import spies from 'chai-spies'

chai.use(spies)
const expect = chai.expect

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)

new Vue({
    el: '#app',
    data: {
        loading1: true
    }
})

try {

    // 单元测试
    {
        '设置 setting icon'
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'setting'
            }
        })
        vm.$mount()
        let userElement = vm.$el.querySelector('use')
        let href = userElement.getAttribute('xlink:href')
        expect(href).to.eq('#i-setting')
        vm.$el.remove()
        vm.$destroy()
    } {
        '设置 loading icon'
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'loading',
            }
        })
        vm.$mount()
        let userElement = vm.$el.querySelector('use')
        let href = userElement.getAttribute('xlink:href')
        expect(href).to.eq('#i-loading')
        vm.$el.remove()
        vm.$destroy()
    }

    {
        '设置 icon-position left'
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'loading',
                // iconPosition: 'left'
            }
        })
        vm.$mount(div)
        let userElement = vm.$el.querySelector('svg')
        let {
            order
        } = window.getComputedStyle(userElement)
        expect(order).to.eq('1')
        vm.$el.remove()
        vm.$destroy()
    }

    {
        '设置 icon-position right'
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'loading',
                iconPosition: 'right'
            }
        })
        vm.$mount(div)
        let userElement = vm.$el.querySelector('svg')
        let {
            order
        } = window.getComputedStyle(userElement)
        expect(order).to.eq('2')
        vm.$el.remove()
        vm.$destroy()
    }


    {
        '测试 click'
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'loading',
            }
        })
        vm.$mount(div)


        let spy = chai.spy(function () {})

        vm.$on('click', spy)
        let button = vm.$el
        button.click()
        expect(spy).to.have.been.called()
        vm.$el.remove()
        vm.$destroy()

    }

} catch (error) {
    window.errors = [error]
} finally {
    window.errors && window.errors.forEach((error) => {
        console.error(error.message)
    })
}