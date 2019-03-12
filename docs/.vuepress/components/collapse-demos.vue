<template>
  <div>
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-collapse :selected.sync="selectedTab">
      <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
      <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
      <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
    </g-collapse>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>


<script>
import GCollapse from "../../../src/collapse";
import collapseItem from "../../../src/collapse-item";

export default {
  components: { GCollapse, "g-collapse-item": collapseItem },
  data() {
    return {
      selectedTab: ["1", "2"],
      content: `
data:{
    selectedTab: ["1", "2"],
}


<g-collapse :selected.sync="selectedTab">
    <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
    <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
    <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
</g-collapse>
`
    };
  }
};
</script>
