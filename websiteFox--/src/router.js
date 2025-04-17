import Home from "./Page/Home.vue";
import Empresas from "./Page/Empresas.vue";
import Tvredfox from "./Page/Tvredfox.vue";
import BeneficiosDescontos from "./Page/BeneficiosDescontos.vue";
import TrabalheConosco from "./Page/TrabalheConosco.vue";

import { createRouter, createWebHistory } from "vue-router";
import Boleto from "./Page/Boleto.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Empresas",
    name: "Empresas",
    component: Empresas,
  },
  {
    path: "/2ViaBoleto",
    name: "2ViaBoleto",
    component: Boleto,
  },
  {
    path: "/Tvredfox",
    name: "Tvredfox",
    component: Tvredfox,
  },
  {
    path: "/BeneficiosDescontos",
    name: "BeneficiosDescontos",
    component: BeneficiosDescontos,
  },
  {
    path: "/TrabalheConosco",
    name: "TrabalheConosco",
    component: TrabalheConosco,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
