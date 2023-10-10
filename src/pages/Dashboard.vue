<template>
  <div class="">
    <q-layout>
      <!-- <q-header class="bg-white text-dark">
        <Navbar @my-event="myAction" />
      </q-header> -->
      <!-- <div class="row q-ma-md">
        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
          <div class="flex column q-mx-xs">
            <Box />
            <div class="full-width q-px-md">
              <div class="bg-white q-pa-lg rounded-borders height-border">
                <p class="text-bold">Bookings per jet type</p>
                <div class="flex justify-center items-center full-height">
                  <h5 class="text-bold text-grey">Chart here still tbd.</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 q-mt-md">
          <div class="q-px-sm flex column justify-between full-height">
            <div class="bg-white shadow-1 q-pa-md bookings-height q-mr-md">
              <p class="text-bold">Latest Bookings</p>
              <div class="flex justify-center items-center full-height">
                <p class="text-bold">No bookings avaliable</p>
              </div>
            </div>
            <div class="bg-white shadow-1 q-pa-md request-height q-mr-md">
              <p class="text-bold">Latest Requests</p>
            </div>
          </div>
        </div>
      </div> -->
    </q-layout>
  </div>
</template>

<script setup>
import Box from "../components/Utils/Box.vue";
</script>

<style lang="scss" scoped>
.height-border {
  height: 600px;
  border: 1px solid #d3d4d3;
}
.bookings-height {
  height: 350px;
}
.request-height {
  height: 350px;
}
</style>
