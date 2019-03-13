---
title: Layout
---

# 基础布局

## 预览

<ClientOnly><layout-demos></layout-demos></ClientOnly>

### 文档
:::tip

目前只支持两种布局

:::
## 代码
```html
<g-layout>
    <g-header>header</g-header>
    <g-content>content</g-content>
    <g-footer>footer</g-footer>
</g-layout>

<g-layout>
    <g-sider>sider</g-sider>
    <g-layout>
      <g-header>header</g-header>
      <g-content>content</g-content>
      <g-footer>footer</g-footer>
    </g-layout>
</g-layout>
```