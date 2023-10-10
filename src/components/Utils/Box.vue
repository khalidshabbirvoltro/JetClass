<template>
  <div>
    <!-- <q-page style="min-height: 20px">
      <q-layout class="" style="min-height: 20px"> -->
    <div class="row">
      <div
        class="col-4 q-px-md q-mt-md"
        v-for="(box, index) in boxes"
        :key="index"
      >
        <q-card :class="'bg-' + box.color">
          <div class="text-h4 q-pa-sm q-pt-lg">{{ box.title }}</div>

          <div class="q-px-md q-pb-md">{{ box.content }}</div>
        </q-card>
      </div>
    </div>
    <!-- </q-layout>
    </q-page> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      boxes: [
        {
          title: "12",
          content: "Aircrafts in fleet",
          color: "green",
        },
        {
          title: "12,356",
          content: "Total Requests",
          color: "yellow",
        },
        {
          title: "111,123",
          content: "Total Offers Submitted",
          color: "purple",
        },
      ],
    };
  },
};
</script>

<style></style>
