const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'
import {
    emit
} from 'cluster';

Vue.config.productionTip = false
Vue.config.devtools = false


describe('Toast', () => {
    it('存在', () => {
        expect(Toast).to.exist
    })
})

describe('props', function () {
    it('接受 autoClose', (done) => {
        let div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Toast)
        const vm = new Constructor({
            propsData: {
                autoClose: 1,
            }
        }).$mount(div)
        vm.$on('close', () => {
            expect(document.body.contains(vm.$el)).to.eq(false)
            done()
        })
    })

    it('closeButton', () => {
        const callback = sinon.fake();
        let div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Toast)
        const vm = new Constructor({
            propsData: {
                closeButton: {
                    text: '知道了',
                    callback,
                }
            }
        }).$mount(div)
        let closeButton = document.querySelector('.close')
        expect(closeButton.innerText).to.eq('知道了')
        closeButton.click()
        expect(callback).to.have.been.called
    })

    it('position', () => {
        let div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Toast)
        const vm = new Constructor({
            propsData: {
                position: 'bottom'
            }
        }).$mount(div)
        expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
    })

    it('接受 enableHtml', () => {
        const Constructor = Vue.extend(Toast)
        const vm = new Constructor({
            propsData: {
                enableHtml: true
            }
        })
        vm.$slots.default = ['<strong id="test">hi</strong>']
        vm.$mount()
        let strong = vm.$el.querySelector('#test')
        expect(strong).to.exist
    })
})