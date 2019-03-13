<template>
  <div>
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <p style="color:green;">click</p>
    <g-popover position="top">
      <template slot="content">
        <div>popover内容</div>
      </template>
      <template>
        <button>上弹出</button>
      </template>
    </g-popover>

    <g-popover position="left">
      <template slot="content">
        <div>popover内容</div>
      </template>
      <template>
        <button>左弹出</button>
      </template>
    </g-popover>

    <g-popover position="right">
      <template slot="content">
        <div>popover内容</div>
      </template>
      <template>
        <button>右弹出</button>
      </template>
    </g-popover>

    <g-popover position="bottom">
      <template slot="content">
        <div>popover内容</div>
      </template>
      <template>
        <button>下弹出</button>
      </template>
    </g-popover>

    <p style="color:green;">hover</p>

    <g-popover position="top" trigger="hover">
      <template slot="content">
        <div>popover内容</div>
      </template>
      <template>
        <button>上弹出</button>
      </template>
    </g-popover>

    <g-popover position="left" trigger="hover">
      <template slot="content">
        <div>popover内容</div>
      </template>
      <template>
        <button>左弹出</button>
      </template>
    </g-popover>

    <g-popover position="right" trigger="hover">
      <template slot="content">
        <div>popover内容</div>
      </template>
      <template>
        <button>右弹出</button>
      </template>
    </g-popover>

    <g-popover position="bottom" trigger="hover">
      <template slot="content">
        <div>popover内容</div>
      </template>
      <template>
        <button>下弹出</button>
      </template>
    </g-popover>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>


<script>
import GPopover from "../../../src/popover";
export default {
  components: { GPopover },
  data() {
    return {
      content: `
<g-popover position="bottom" trigger="hover">
    <template slot="content">
        <div>popover内容</div>
    </template>
    <template>
        <button>下弹出</button>
    </template>
</g-popover>`.replace(/^ {8}/gm, "").trim()
    };
  }
};
</script>

<style scoped>
</style>

