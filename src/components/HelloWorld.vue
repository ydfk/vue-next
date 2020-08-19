<!--
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2020-08-19 16:38:19
 * @LastEditors: ydfk
 * @LastEditTime: 2020-08-19 18:03:53
-->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <a-button type="primary">asas</a-button>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  props: {
    msg: {
      type: String,
      default: "",
      required: false,
    },
  },
  setup() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
