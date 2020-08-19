<!--
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2020-08-19 16:38:19
 * @LastEditors: ydfk
 * @LastEditTime: 2020-08-19 17:16:23
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default {
  components: {
    HelloWorld,
  },
  name: "Home",
  setup() {
    return {};
  },
};
</script>
