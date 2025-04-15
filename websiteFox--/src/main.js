import { createApp } from "vue";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "./style.css";
import App from "./App.vue";

const vuetify = createVuetify({
  components,
  directives,
});
const app = createApp(App);

app.use(vuetify);
createApp(App).mount("#app");
