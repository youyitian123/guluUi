---
title: Collapse
---
#  折叠面板

## 预览

<ClientOnly><collapse-demos></collapse-demos></ClientOnly>

## 文档

:::tip
selectedTab : 默认选中元素

name : 唯一标识
:::

## 代码

```js
data:{
    selectedTab: ["1", "2"],
}
```

```html
<g-collapse :selected.sync="selectedTab">
    <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
    <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
    <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
</g-collapse>
```
