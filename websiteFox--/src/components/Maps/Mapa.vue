<template>
  <div class="map-container">
    <l-map
      ref="map"
      :zoom="zoom"
      :center="center"
      :options="{ zoomControl: false }"
      style="height: 80vh; width: 80%; margin: 0 auto"
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <l-marker
        v-for="(location, index) in locations"
        :key="index"
        :lat-lng="[location.lat, location.lon]"
        :icon="myIcon"
      >
        <l-popup>{{ location.title }}</l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import customIcon from "../../assets/favicon (1).jpg";

const zoom = ref(13);
const center = ref([-23.430219, -46.535219]);

const myIcon = L.icon({
  iconUrl: customIcon,
  iconSize: [38, 41],
  iconAnchor: [12, 41],
  popupAnchor: [0, -41],
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png",
  shadowSize: [41, 41],
  shadowAnchor: [12, 41],
});

const locations = ref([
  {
    lat: -23.43768,
    lon: -46.40822,
    title:
      "Pimentas , Rua Muribeca, 262 Jardim Monte Alegre – CEP: 07273-330 Horário de Funcionamento: Segunda a Sexta das 08:00 às 18:00 | Sábado das 08:00 às 17:00 | Feriados e domingo – Fechado",
  },
  {
    lat: -23.44596,
    lon: -46.41033,
    title:
      "Jurema , Rua Olivanca, 221 A Jardim Carvalho – CEP: 07244-310 Horário de Funcionamento: Segunda a Sexta das 08:00 às 18:00 | Sábado das 08:00 às 17:00 | Feriados e domingo – Fechado",
  },
  {
    lat: -23.40358,
    lon: -46.41665,
    title:
      "Ponte Alta , Avenida José Rangel Filho, 933 Jardim Ponte Alta I – CEP: 07179-350 Horário de Funcionamento: Segunda a Sexta das 08:00 às 18:00 | Sábado das 08:00 às 17:00 | Feriados e domingo – Fechado",
  },
  {
    lat: -23.44523,
    lon: -46.46388,
    title:
      "Base Aérea , Rua Anastácio, 54 Conjunto Residencial Paes de Barros – CEP: 07182-200 Horário de Funcionamento: Segunda a Sexta das 08:40 às 17:00 | Sábado das 08:00 às 17:00 | Feriados e domingo – Fechado",
  },
  {
    lat: -23.31608,
    lon: -46.22531,
    title:
      "Santa Isabel , Av. Manoel Ferraz de Campos Salles, 642 – Parque São Benedito – CEP: 07500-000 Horário de Funcionamento: Segunda a Sexta das 08:00 às 18:00 | Sábado das 08:00 às 17:00 | Feriados e domingo – Fechado",
  },
  {
    lat: -23.49351,
    lon: -46.40044,
    title:
      "Itaim Paulista – São Paulo Rua Cordão de São Francisco, 847 – Vila Aimoré – CEP: 08190-000 Horário de Funcionamento: Segunda a Sexta das 08:40 às 17:00 | Sábado das 08:00 às 17:00 | Feriados e domingo – Fechado",
  },
  {
    lat: -23.38901,
    lon: -46.31482,
    title:
      "Arujá  , Av. dos Expedicionários, 975 Centro – CEP: 07400-490 Horário de Funcionamento: Segunda a Sexta das 08:40 às 17:00 | Sábado das 08:00 às 17:00 | Feriados e domingo – Fechado",
  },
  {
    lat: -23.38105,
    lon: -46.44425,
    title:
      "Fortaleza – Guarulhos Rua Ivanete de Menezes Lyra, 165 Jardim Fortaleza – CEP: 07153-605 Horário de Funcionamento: Segunda a Sexta das 08:00 às 18:00 | Sábado das 08:00 às 17:00 | Feriados e domingo – Fechado",
  },
  {
    lat: -23.4121763,
    lon: -46.4858231,
    title:
      "Santos Dummont – Guarulhos Estrada do Elenco, 4610 – Pq. Primavera – CEP: 07145-240 Horário de Funcionamento: Segunda a Sexta das 08:00 às 18:00 | Sábado das 08:00 às 17:00 | Feriados e domingo – Fechado",
  },
  {
    lat: -23.42396,
    lon: -46.34918,
    title:
      "Jardim América – Itaquaquecetuba R. José Alexandrino de Morães, 333 – Jardim Patricia, CEP: 08584-090 Horário de Funcionamento: Segunda a Sexta das 08:00 às 18:00 | Sábado das 08:00 às 17:00 | Feriados e domingo – Fechado",
  },
  {
    lat: -23.46341,
    lon: -46.40509,
    title:
      "Marcos Freire – Guarulhos Estr. do Sacramento, 1051 – Cidade Tupinambá – CEP: 07263-000 Horário de Funcionamento: Segunda a Sexta das 08:00 às 18:00 | Sábado das 08:00 às 17:00 | Feriados e domingo – Fechado",
  },
  {
    lat: -23.36479,
    lon: -46.026285,
    title:
      "Jacareí Rod. Henrique Eroles, 200 São João – CEP: 12322-540 Horário de Funcionamento: Segunda a Sexta das 08:00 às 18:00 | Sábado das 08:00 às 17:00 | Feriados e domingo – Fechado",
  },
  {
    lat: -23.411242,
    lon: -46.403881,
    title:
      "Bonsucesso, Guarulhos Rua Tamotsu Iwasse, n° 3 - Vila Nova Bonsucesso, Guarulhos/SP - (Loja é dentro do Mercado Nagumo) Horário de Funcionamento: Segunda a Sábado das 08:00 às 20:00 | Feriados e domingo – Fechado",
  },
]);
</script>

<style scoped>
.map-container {
  width: 80%;
  height: 60%;
  margin-top: 8%;
  padding: 32px;
}
</style>
