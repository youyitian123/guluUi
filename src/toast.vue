<template>
  <div class="toast">
    <slot>123</slot>
  </div>
</template>

<script>
export default {
  name: "GuluToast"
};
</script>


<style lang="scss" scoped>
$toast-font-size: 14px;
$toast-height: 40px;
// $toast-bg: ;

.toast {
  font-family: PingFangSC-Regular;
  color: #ffffff;
  font-size: $toast-font-size;
  height: $toast-height;
  line-height: 1.8;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 16px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.74);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
}
</style>

