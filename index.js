import Vue from 'vue'
import Button from './src/button'
import Icon from './src/icon'
import Input from './src/input'
import Row from './src/row'
import Col from './src/col'
import layout from './src/layout'
import header from './src/header'
import footer from './src/footer'
import sider from './src/sider'
import content from './src/content'
import toast from './src/toast'
import Plugin from './src/plugin'
import Tabs from './src/tabs'
import tabsHead from './src/tabs-head'
import tabsItem from './src/tabs-item'
import tabsBody from './src/tabs-body'
import tabsPane from './src/tabs-pane'
import Popover from './src/popover'
import Collapse from './src/collapse'
import collapseItem from './src/collapse-item'

Vue.use(Plugin)

export {
    Button,
    Icon,
    Input,
    Row,
    Col,
    layout,
    header,
    content,
    toast,
    footer,
    sider,
    Tabs,
    tabsHead,
    tabsItem,
    tabsBody,
    tabsPane,
    Popover,
    Collapse,
    collapseItem
}

