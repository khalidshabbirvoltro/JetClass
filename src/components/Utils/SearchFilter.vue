<script setup>
import { ref } from "vue";
const model = ref(null);
const options = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];
</script>
<template>
  <div>
    <q-layout>
      <header>
        <div class="flex">
          <q-input
            style="width: 320px"
            color="grey-3"
            label-color="grey"
            outlined
            dense
            v-model="text"
            label="Search by Airport Name or Code etc...."
          >
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
          <div class="q-px-md">
            <q-btn-dropdown
              outline
              no-caps
              icon="tv"
              color="grey"
              label="All Status"
              style="height: 40px"
              class="lable-black"
            >
              <q-list>
                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Photos</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Videos</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
          <div class="">
            <q-select
              dense
              outlined
              v-model="model"
              :options="options"
              label="Today"
              color="black"
              :options-dense="denseOpts"
              style="width: 170px"
            >
              <template v-slot:prepend>
                <q-icon name="today" />
              </template>
              <template v-slot:append>
                <q-icon name="clear" @click.stop.prevent="model = ''" />
              </template>
            </q-select>
          </div>
          <q-space style="color: black"></q-space>
          <div class="flex">
            <q-card
              flat
              class="flex justify-evenly flex-center q-mx-md q-px-md"
              style="width: 270px; background-color: #dbf5ed"
            >
              <div class="text-weight-bold text-h6" style="">21</div>
              <div class="text-body2">Request received today</div>
              <div>
                <q-chip
                  dense
                  color="white"
                  text-color="green"
                  icon="trending_up"
                >
                  4%
                </q-chip>
              </div>
            </q-card>
            <q-card
              flat
              class="flex justify-evenly flex-center q-px-md"
              style="width: 270px; background-color: #e1dbf7"
            >
              <div class="text-weight-bold text-h6">21</div>
              <div class="text-body2">Offers submitted today</div>
              <div>
                <q-chip
                  dense
                  color="white"
                  text-color="red"
                  icon="trending_down"
                >
                  4%
                </q-chip>
              </div>
            </q-card>
          </div>
        </div>
      </header>
    </q-layout>
  </div>
</template>
<style>
.lable-black .block {
  color: black;
}
</style>
