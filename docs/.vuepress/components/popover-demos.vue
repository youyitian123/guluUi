<template>
  <div style="padding-top: 20px">
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
  </div>
</template>

<script>
import GPopover from "../../../src/popover";
export default {
  components: { GPopover },
};
</script>

<style scoped>
</style>

