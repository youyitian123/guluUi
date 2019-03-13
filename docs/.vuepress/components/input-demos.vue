<template>
  <div style="padding-top: 20px;">
    <g-input value="中文"></g-input>
    <g-input value="中文" disabled></g-input>
    <g-input value="中文" readonly></g-input>
    <p></p>
    <g-input value="密码" error="密码错误"></g-input>
  </div>
</template>

<script>
import GInput from "../../../src/input";
export default {
  components: { GInput },
};
</script> 