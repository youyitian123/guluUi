---
title: Button
---
# 按钮

## 预览

<ClientOnly><button-demos></button-demos></ClientOnly>

## 文档

:::tip
icon : 图标样式

iconposition : 图标位置

:loading : 加载按钮

disabled : 禁用按钮

type : 按钮样式类型

:::

## 代码

```html
<g-button>默认按钮</g-button>
<g-button icon="setting" iconposition="left">默认按钮</g-button>
<g-button :loading="true">默认按钮</g-button>
<g-button disabled>默认按钮</g-button>

<g-button type="primary">主要按钮</g-button>
<g-button type="success">成功按钮</g-button>
<g-button type="info">信息按钮</g-button>
<g-button type="warning">警告按钮</g-button>
<g-button type="danger">危险按钮</g-button>
```