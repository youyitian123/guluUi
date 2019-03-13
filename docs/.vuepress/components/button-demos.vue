<template>
  <div style="padding-top: 20px">
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
  </div>
</template>

<script>
import Button from "../../../src/button";
export default {
  components: {
    "g-button": Button
  },
};
</script> 
