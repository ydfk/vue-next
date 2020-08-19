/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2020-08-19 16:38:19
 * @LastEditors: ydfk
 * @LastEditTime: 2020-08-19 17:58:27
 */
import { createApp } from "vue";
import antd from "ant-design-vue";
//import "ant-design-vue/components/style/index.less";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App)
  .use(antd as any)
  .use(store)
  .use(router)
  .mount("#app");
