import Vue from 'vue'
import tabsItem from '../src/tabs-item'
const expect = chai.expect;



describe('tabs-item', () => {
    it('存在', () => {
        expect(tabsItem).to.exist
    })

    it('name', () => {
        const Constructor = Vue.extend(tabsItem)
        const vm = new Constructor({
            propsData: {
                name: 'xxx'
            }
        }).$mount()
        expect(vm.$el.getAttribute('data-name')).to.eq('xxx')
    })
    it('disabled', () => {
        const Constructor = Vue.extend(tabsItem)
        const vm = new Constructor({
            propsData: {
                disabled: true
            }
        }).$mount()
        expect(vm.$el.classList.contains('disabled')).to.be.true
        const callback = sinon.fake()
        vm.$on('click', callback)
        vm.$el.click()
        expect(callback).to.have.not.been.called
    })
})