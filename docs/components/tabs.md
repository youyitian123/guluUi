---
title: Tabs
---
# Tabs 标签页

## 预览

<ClientOnly><tabs-demos></tabs-demos></ClientOnly>

## 文档

:::tip

:selected.sync : 默认选中元素

name : 唯一标识

:::

## 代码

```html
<g-tabs :selected.sync="selectedTab">
  <g-tabs-head>
    <g-tabs-item name="1">item1</g-tabs-item>
    <g-tabs-item name="2">item2</g-tabs-item>
  </g-tabs-head>
  <g-tabs-body>
    <g-tabs-pane name="1">content 1</g-tabs-pane>
    <g-tabs-pane name="2">content 2</g-tabs-pane>
  </g-tabs-body>
</g-tabs>
```

```js
data:{
  selectedTab: "1"
}
```