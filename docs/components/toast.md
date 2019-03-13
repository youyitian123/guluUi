---
title: Toast
---
# 通知

## 预览


<ClientOnly><toast-demos></toast-demos></ClientOnly>

## 文档

:::tip

autoClose : 是否自动关闭

position : 通知出现的位置

type : 通知的样式

closeButton : 关闭按钮

text : 关闭的内容

callback : 关闭后的回调操作
:::


## 代码

```html
<button @click="showToast()">Toast</button>
```
```js
showToastTop() {
  this.$toast("我是 message", {
    autoClose: false,
    position: "top",  /*top, left, right, bottom*/
    type: "default",  /*default, success, warning, error*/
    closeButton: {
      text: "知道了",
      callback(toast) {console.log("测试");}
  }
});
```