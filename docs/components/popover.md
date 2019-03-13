---
title: Popover
---

# 弹出框

## 预览

<ClientOnly><popover-demos></popover-demos></ClientOnly>

## 文档

:::tip
slot : 唯一标识

trigger : 弹出方式
:::

## 代码

```html
<!-- click -->
<g-popover position="bottom">
    <template slot="content">
      <div>popover内容</div>
    </template>
    <template>
      <button>点我</button>
    </template>
</g-popover>

<!-- hover -->
<g-popover position="bottom" trigger="hover">
    <template slot="content">
      <div>popover内容</div>
    </template>
    <template>
      <button>点我</button>
    </template>
</g-popover>`
```