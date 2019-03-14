---
title: Grid
---

# 栅格

## 预览

<ClientOnly><grid-demos></grid-demos></ClientOnly>

## 文档

:::tip
span :  < 577px

:ipad : 577px - 769px 的比例
 
:narrow-pc : 769px - 993px 的比例

:pc : 993px - 1201px 的比例

:wide-pc : > 1201px 的比例
:::

## 代码

```html
<g-row>
    <g-col 
      span="24 :ipad="{span:24}" :narrow-pc="{span:24}"
      :pc="{span:24}" :wide-pc="{span:24}">
    </g-col>
    </g-row>
<g-row>
    <g-col 
      span="12" :ipad="{span:12}" :narrow-pc="{span:12}"
      :pc="{span:12}" :wide-pc="{span:12}">
    </g-col>
    <g-col 
      span="12" :ipad="{span:12}" :narrow-pc="{span:12}"
      :pc="{span:12}" :wide-pc="{span:12}">
    </g-col>
</g-row>
<g-row>
    <g-col 
      span="8" :ipad="{span:8}" :narrow-pc="{span:8}" 
      :pc="{span:8}" :wide-pc="{span:8}">
    </g-col>
    <g-col 
      span="8" :ipad="{span:8}" :narrow-pc="{span:8}" 
      :pc="{span:8}" :wide-pc="{span:8}">
    </g-col>
    <g-col 
      span="8" :ipad="{span:8}" :narrow-pc="{span:8}" 
      :pc="{span:8}" :wide-pc="{span:8}">
    </g-col>
</g-row>
```