<template>
  <div class="">
    <q-toolbar class="text-black padding q-my-md">
      <q-btn dense unelevated icon="menu" class="" />
      <q-btn
        color=""
        label="Jet Requests"
        label-color="black"
        dense
        flat
        no-caps
        class="underline-text"
      >
        <q-menu :offset="[25, 15]" style="width: 470px">
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>:offset="[-10, 1]"</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>:offset="[-10, 1]"</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
      <q-separator
        black
        vertical
        inset
        color="black"
        class="q-mx-md"
        style="width: 1px"
      />
      <q-tabs
        v-model="tab"
        inline-label
        :breakpoint="0"
        no-caps
        active-color="black"
        indicator-color="black"
        :align="justify"
        class="text-grey"
      >
        <q-tab
          name="all-requests"
          label="All Requests"
          class="padding q-mx-md"
        />
        <q-tab
          name="active-requests"
          label="Active Request"
          class="padding q-mx-md"
        />
        <q-tab
          v-if="$q.screen.gt.sm"
          name="offers-sent"
          label="Offers Sent"
          class="padding q-mx-md"
        />
        <q-tab
          v-if="$q.screen.gt.sm"
          name="archived"
          label="Archived"
          class="padding q-mx-md"
        />
        <q-btn-dropdown
          v-if="$q.screen.lt.md"
          auto-close
          stretch
          flat
          label="More..."
        >
          <q-list>
            <q-item clickable @click="tab = 'movies'">
              <q-item-section>Movies</q-item-section>
            </q-item>

            <q-item clickable @click="tab = 'photos'">
              <q-item-section>Photos</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-tabs>

      <q-space style="color: black"></q-space>
      <div>
        <q-img
          src="../assets/logo-profile.png"
          style="height: 32px; width: 180px"
        ></q-img>
      </div>
    </q-toolbar>
  </div>
</template>

<script setup>
import { ref } from "vue";
const tab = ref("mails");
</script>

<style lang="scss" scoped>
.header-overlay::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 2;
}

.active-drawer .header-overlay::before {
  display: none;
}
.padding {
  padding: 0px;
}
.q-tab:hover {
  border-bottom: 1px solid rgb(148, 146, 146); /* You can adjust the border properties as needed */
}
.underline-text {
  position: relative;
  display: flex;
  width: 95px;
  color: black;
}

.underline-text::after {
  content: "";
  position: absolute;
  bottom: 0;
  color: black;
  width: 70%;
  height: 2px; /* Adjust the line height as needed */
  background-color: #13b89b; /* Adjust the line color as needed */
}
</style>
