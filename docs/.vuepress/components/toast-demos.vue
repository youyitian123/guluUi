<template>
  <div style="padding-top: 20px">
    <button @click="showToastTop()">顶部弹出</button>
    <button @click="showToastMidele()">中间弹出</button>
    <button @click="showToastBottom()">底部弹出</button>
    <p></p>
    <button @click="open1()">成功</button>
    <button @click="open2()">警告</button>
    <button @click="open3()">错误</button>
  </div>
</template>

<script>
import Vue from "vue";
import GTost from "../../../src/toast";
import Plugin from "../../../src/plugin";
Vue.use(Plugin);

export default {
  components: { GTost },
  methods: {
    showToastTop() {
      this.$toast("我是 message", {
        autoClose: false,
        position: "top",
        closeButton: {
          text: "知道了",
          callback(toast) {
            console.log("测试");
          }
        }
      });
    },
    showToastBottom() {
      this.$toast("我是 message", {
        autoClose: false,
        position: "bottom",
        closeButton: {
          text: "知道了",
          callback(toast) {
            console.log("测试");
          }
        }
      });
    },
    showToastMidele() {
      this.$toast("我是 message", {
        autoClose: false,
        position: "midele",
        closeButton: {
          text: "知道了",
          callback(toast) {
            console.log("测试");
          }
        }
      });
    },
    open1() {
      this.$toast("我是 成功", {
        autoClose: false,
        position: "top",
        type: "success",
        closeButton: {
          text: "知道了",
          callback(toast) {
            console.log("测试");
          }
        }
      });
    },
    open2() {
      this.$toast("我是 警告", {
        autoClose: false,
        position: "top",
        type: "warning",
        closeButton: {
          text: "知道了",
          callback(toast) {
            console.log("测试");
          }
        }
      });
    },
    open3() {
      this.$toast("我是 错误", {
        autoClose: false,
        position: "top",
        type: "error",
        closeButton: {
          text: "知道了",
          callback(toast) {
            console.log("测试");
          }
        }
      });
    }
  }
};
</script>
