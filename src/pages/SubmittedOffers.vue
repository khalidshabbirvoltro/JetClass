<template>
  <div class="">
    <q-layout view="lHh Lpr lff">
      <q-btn
        class="q-ma-xl"
        style="background: rgb(233, 206, 137); color: rgb(0, 0, 0)"
        label="Goldenrod"
        @click="toggleDrawer"
      />
      <SubmittedDrawer v-if="drawer" @click="toggleDrawer" />
    </q-layout>
  </div>
</template>

<script setup>
import SubmittedDrawer from "../components/Utils/SubmittedDrawer.vue";

import { ref } from "vue";

const drawer = ref(false);

function toggleDrawer() {
  drawer.value = !drawer.value;
}

// function toggleDrawer() {
//   if (drawer.value) {
//     drawer.value = true;
//   } else {
//     drawer.value = false;
//   }
// }
</script>

<style lang="scss" scoped></style>
