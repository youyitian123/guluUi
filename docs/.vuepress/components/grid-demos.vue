<template>
  <div>
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-row>
      <g-col
        span="24"
        :ipad="{span:24}"
        :narrow-pc="{span:24}"
        :pc="{span:24}"
        :wide-pc="{span:24}"
      >
        <div class="demo bg1">demo</div>
      </g-col>
    </g-row>
    <g-row>
      <g-col
        span="12"
        :ipad="{span:12}"
        :narrow-pc="{span:12}"
        :pc="{span:12}"
        :wide-pc="{span:12}"
      >
        <div class="demo bg1">demo</div>
      </g-col>
      <g-col
        span="12"
        :ipad="{span:12}"
        :narrow-pc="{span:12}"
        :pc="{span:12}"
        :wide-pc="{span:12}"
      >
        <div class="demo bg2">demo</div>
      </g-col>
    </g-row>
    <g-row>
      <g-col span="8" :ipad="{span:8}" :narrow-pc="{span:8}" :pc="{span:8}" :wide-pc="{span:8}">
        <div class="demo bg1">demo</div>
      </g-col>
      <g-col span="8" :ipad="{span:8}" :narrow-pc="{span:8}" :pc="{span:8}" :wide-pc="{span:8}">
        <div class="demo bg2">demo</div>
      </g-col>
      <g-col span="8" :ipad="{span:8}" :narrow-pc="{span:8}" :pc="{span:8}" :wide-pc="{span:8}">
        <div class="demo bg1">demo</div>
      </g-col>
    </g-row>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
import GRow from "../../../src/row";
import GCol from "../../../src/col";

export default {
  components: { GRow, GCol },
  data() {
    return {
      content: `
<g-row>
    <g-col span="24 :ipad="{span:24}" :narrow-pc="{span:24}"
        :pc="{span:24}" :wide-pc="{span:24}">
    </g-col>
    </g-row>
<g-row>
    <g-col span="12" :ipad="{span:12}" :narrow-pc="{span:12}"
        :pc="{span:12}" :wide-pc="{span:12}">
    </g-col>
    <g-col span="12" :ipad="{span:12}" :narrow-pc="{span:12}"
        :pc="{span:12}" :wide-pc="{span:12}">
    </g-col>
</g-row>
<g-row>
    <g-col span="8" :ipad="{span:8}" :narrow-pc="{span:8}" 
        :pc="{span:8}" :wide-pc="{span:8}">
    </g-col>
    <g-col 
        span="8" :ipad="{span:8}" :narrow-pc="{span:8}" 
        :pc="{span:8}" :wide-pc="{span:8}">
    </g-col>
    <g-col span="8" :ipad="{span:8}" :narrow-pc="{span:8}" 
        :pc="{span:8}" :wide-pc="{span:8}">
    </g-col>
</g-row>
`.replace(/^ {8}/gm, "").trim()
    };
  }
};
</script>

<style scoped>
.demo {
  text-align: center;
  height: 30px;
  color: white;
  line-height: 30px;
  border-radius: 4px;
  margin: 1px 0;
}

.bg1 {
  background: #7dbcea;
}

.bg2 {
  background: rgba(16, 142, 233, 1);
}
</style>
