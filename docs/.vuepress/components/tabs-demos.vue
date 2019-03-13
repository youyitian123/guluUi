<template>
  <div style="padding-top: 20px;">
    <g-tabs :selected.sync="selectedTab">
      <g-tabs-head>
        <g-tabs-item name="1">item1</g-tabs-item>
        <g-tabs-item name="2">item2</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="1">content 1</g-tabs-pane>
        <g-tabs-pane name="2">content 2</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
  </div>
</template>

<script>
import GTabs from "../../../src/tabs";
import GTabsHead from "../../../src/tabs-head";
import GTabsItem from "../../../src/tabs-item";
import GTabsBody from "../../../src/tabs-body";
import GTabsPane from "../../../src/tabs-pane";

export default {
  components: { GTabs, GTabsHead, GTabsItem, GTabsBody, GTabsPane },
  data() {
    return {
      selectedTab: "1"
    };
  }
};
</script>

