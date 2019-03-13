<template>
  <div>
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-button>默认按钮</g-button>
    <g-button icon="setting" iconPosition="left">默认按钮</g-button>
    <g-button :loading="true">默认按钮</g-button>
    <g-button disabled>默认按钮</g-button>
    <p></p>
    <g-button type="primary">主要按钮</g-button>
    <g-button type="success">成功按钮</g-button>
    <g-button type="info">信息按钮</g-button>
    <g-button type="warning">警告按钮</g-button>
    <g-button type="danger">危险按钮</g-button>
    <p></p>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
import Button from "../../../src/button";
export default {
  components: {
    "g-button": Button
  },
  data() {
    return {
      content: `
<g-button>默认按钮</g-button>
<g-button icon="setting" iconposition="left">默认按钮</g-button>
<g-button :loading="true">默认按钮</g-button>
<g-button disabled>默认按钮</g-button>

<g-button type="primary">主要按钮</g-button>
<g-button type="success">成功按钮</g-button>
<g-button type="info">信息按钮</g-button>
<g-button type="warning">警告按钮</g-button>
<g-button type="danger">危险按钮</g-button>
	      `.replace(/^ {8}/gm, "").trim()
    };
  }
};
</script> 
	<style lang="scss" scoped>
.g-button-group {
  margin-top: 1em;
}
</style>
	
