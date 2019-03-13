<template>
  <div>
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-layout>
      <g-header class="demo bg1">header</g-header>
      <g-content class="demo bg2">content</g-content>
      <g-footer class="demo bg3">footer</g-footer>
    </g-layout>
    <p></p>
    <g-layout>
      <g-sider class="demo2 bg3">sider</g-sider>
      <g-layout>
        <g-header class="demo bg1">header</g-header>
        <g-content class="demo bg2">content</g-content>
        <g-footer class="demo bg3">footer</g-footer>
      </g-layout>
    </g-layout>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
import GLayout from "../../../src/layout";
import GHeader from "../../../src/header";
import GFooter from "../../../src/footer";
import GSider from "../../../src/sider";
import GContent from "../../../src/content";

export default {
  components: { GLayout, GHeader, GFooter, GSider, GContent },
  data() {
    return {
      content: `
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
        `.replace(/^ {8}/gm, "").trim()
    };
  }
};
</script>

<style scoped>
.demo {
  color: white;
  text-align: center;
  height: 50px;
  line-height: 50px;
}
.demo2 {
  color: white;
  text-align: center;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bg1 {
  background: #7dbcea;
}
.bg2 {
  background: rgba(16, 142, 233, 1);
}
.bg3 {
  background: #7dbcea;
}
.bg3 {
  background: #3ba0e9;
}
</style>

