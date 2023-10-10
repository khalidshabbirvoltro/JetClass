<script setup>
// import { ref } from "vue";
import Navbar from "../components/Navbar.vue";
import SearchFilter from "../components/Utils/SearchFilter.vue";
// const toggle = ref(false);
// const miniState = ref(false);
// function drawerClick(e) {
//   if (miniState.value) {
//     miniState.value = false;
//     e.stopPropagation();
//   }
// }

// const drawer = ref(false);
</script>

<template>
  <div class="">
    <q-layout view="lHh Lpr lff ">
      <q-header class="text-dark bg-white q-mx-lg">
        <Navbar @my-event="myAction" />
        <SearchFilter />

        <router-view />
      </q-header>
    </q-layout>
  </div>
</template>

<style lang="css" scoped>
.button-border {
  border: 1px solid rgba(175, 173, 173, 0.636);
}
</style>
<!-- <script setup>
import { ref } from "vue";
import Navbar from "../components/Navbar.vue";

const toggle = ref(false);
const miniState = ref(false);

function drawerClick(e) {
  if (miniState.value) {
    miniState.value = false;
    e.stopPropagation();
  }
}

const drawer = ref(false);

const items = ref([
  {
    icon: "dashboard",
    title: "Dasboard",
    to: "dashboard",
  },
  {
    icon: "inbox",
    title: "Jet Requests",
    to: "jet-request",
  },
  {
    icon: "inbox",
    title: "Aircraft Availability",
    to: "aircraft-availability",
  },
  {
    icon: "inbox",
    title: "Submitted offers",
    to: "submitted-offers",
  },
  {
    icon: "inbox",
    title: "Invoices",
    to: "invoices",
  },
  {
    icon: "inbox",
    title: "Search a Jet",
    to: "search-jet",
  },
  {
    icon: "inbox",
    title: "Open Requests",
    to: "open-request",
  },
]);
</script> -->

<!-- <template>
  <div class="">
    <q-layout view="lHh Lpr lff ">
      <q-header class="text-dark bg-white">
        <Navbar @my-event="myAction" />

        <q-drawer
          v-model="toggle"
          :width="230"
          show-if-above
          :breakpoint="500"
          class="bg-primary"
          :mini="!toggle || miniState"
          @click.capture="drawerClick"
          bordered
          :class="$q.dark.isActive ? 'bg-white' : 'bg-white'"
          @hide="drawerClosed"
        >
          <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
            <q-list padding>
              <q-item-section>
                <h4 class="flex justify-center">Jetclass</h4>
              </q-item-section>

              <template v-for="(item, index) in items" :key="`nav-${index}`">
                <q-item
                  clickable
                  :active="$route.name === item.to"
                  active-class="active-link"
                  v-ripple
                  @click="
                    $route.name !== item.to
                      ? $router.push({ name: item.to })
                      : ''
                  "
                >
                  <q-item-section avatar>
                    <i :class="item.icon" style="font-size: 25px"></i>
                    <q-icon :name="item.icon" />
                  </q-item-section>

                  <q-item-section>
                    {{ item.title }}
                  </q-item-section>
                </q-item>
              </template>
            </q-list>
          </q-scroll-area>
          <div
            class="q-mini-drawer-hide absolute"
            style="top: 70px; right: -17px"
          >
            <q-btn
              round
              unelevated
              size="10px"
              class="bg-white button-border"
              icon="chevron_left"
              @click="miniState = true"
            />
          </div>
        </q-drawer>
        <router-view />
      </q-header>
      <q-page-container>
        <q-page padding class="bg-grey-11">
          
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template> -->
<!-- 
<style lang="css" scoped>
.button-border {
  border: 1px solid rgba(175, 173, 173, 0.636);
}
.active-link {
  background-color: grey;
}
</style> -->
