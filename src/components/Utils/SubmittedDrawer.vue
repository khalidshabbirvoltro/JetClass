<template>
  <div class="">
    <q-page-container class="submitted-drawer">
      <q-page>
        <q-drawer
          v-model="drawer"
          :mini="!drawer || miniState"
          @click="drawerClick"
          :width="1200"
          side="right"
          :breakpoint="500"
          overlay
          class="bg-white"
          bordered
          :class="[$q.dark.isActive ? 'bg-white' : 'bg-white']"
        >
          <div
            class="q-mini-drawer-hide absolute"
            style="top: 250px; left: -80px"
          >
            <q-btn
              dense
              round
              unelevated
              background-colorcolor="white"
              icon="close"
              @click="toggleDrawer"
            />
          </div>
          <div class="q-mx-lg q-mt-xl">
            <div class="row flex">
              <div class="col-8 bg-white text-h5 text-bold text-black">
                Offer Preview #487234
                <div class="bg-white text-caption text-gray q-mt-xs">
                  Request Received On: 13th June, 2023 - 09:01 | Offer Submitted
                  On: 13th June, 2023 - 09:32
                </div>
              </div>
              <div class="col-4 bg-white flex justify-end">
                <q-btn
                  style="height: 40px"
                  class="text-center line-height"
                  color="green"
                  label="OFFER CONFIRMED"
                />
              </div>
            </div>
            <div class="text-subtitle1 text-bold text-dark q-mt-lg">
              Operator
            </div>
            <div class="q-mt-md rounded-borders height-border">
              <div class="flex items-center full-height text-black">
                <div
                  class="bg-grey-4 q-mx-md"
                  style="height: 70px; width: 140px; border: 1px solid #d3d4d3"
                ></div>
                <div class="text-grey text-bold q-px-md">
                  Operated By
                  <div class="text-dark text-bold">Vista Airlines</div>
                </div>
                <div class="text-grey text-bold q-px-md">
                  Key Account Manager
                  <div class="text-dark text-bold">
                    Mohamed Khalid Al Honzer
                  </div>
                </div>
                <div class="text-grey text-bold q-px-md">
                  Note
                  <div class="text-dark text-bold">
                    Your details will be available shortly after the
                    confirmation,
                  </div>
                </div>
              </div>
            </div>
            <!-- next box -->
            <div class="text-subtitle1 text-bold text-dark q-mt-lg">
              Jet Offered
            </div>
            <div class="q-mt-md rounded-borders height-border">
              <div class="flex items-center full-height text-black">
                <div
                  class="bg-grey-4 q-ml-md q-mr-xs"
                  style="height: 80px; width: 100px; border: 1px solid #d3d4d3"
                ></div>
                <div
                  class="bg-grey-4 q-mx-xs"
                  style="height: 80px; width: 100px; border: 1px solid #d3d4d3"
                ></div>
                <div
                  class="bg-grey-4 q-mx-xs"
                  style="height: 80px; width: 100px; border: 1px solid #d3d4d3"
                ></div>
                <div
                  class="bg-grey-4 q-mx-xs"
                  style="height: 80px; width: 100px; border: 1px solid #d3d4d3"
                ></div>
                <div class="text-black text-h5 text-weight-medium q-px-xs">
                  <div>LearJet 45XR</div>
                  <div class="">
                    <q-chip class="bg-grey-3 text-dark text-caption text-bold"
                      >Add to calendar</q-chip
                    >
                    <q-chip class="bg-grey-3 text-dark text-caption text-bold"
                      >Add to calendar</q-chip
                    >
                  </div>
                </div>
              </div>
            </div>
            <!-- next box -->
            <div class="text-subtitle1 text-bold text-dark q-mt-lg">
              Itierary
            </div>
            <div class="q-mt-md rounded-borders height-border">
              <div
                class="flex items-center justify-between full-height text-black"
              >
                <div class="text-black text-h5 text-weight-medium q-px-md">
                  Dubai, UAE
                  <div class="text-caption text-gray">
                    Dubai International Airport
                  </div>
                  <div class="text-caption text-gray">DXB/ OMBD</div>
                </div>
                <div class="text-grey text-bold q-px-md">
                  Key Account Manager
                </div>
                <div class="text-black text-h5 text-weight-medium q-px-md">
                  Vienna, Austria
                  <div class="text-caption text-gray">
                    Vienna Schwechat International Airport
                  </div>
                  <div class="text-caption text-gray">VIE/ LOWW</div>
                </div>
              </div>
            </div>
            <!-- next box -->
            <div class="row q-mt-lg">
              <div class="col-6 q-pr-xs rounded-borders">
                <div class="height-border bg-grey-11 q-pa-md">
                  <div class="text-h6 text-weight-medium text-black">
                    Comments form operator
                  </div>
                  <div class="text-caption text-dark">
                    Vip Catering includes, GAT includes, VIP Launge includes,
                    De-icing included, Smoking Allowed, ITALIAN TAX included,
                    VAT included
                  </div>
                </div>
              </div>
              <div class="col-6 rounded-borders q-pl-xs">
                <div class="height-border q-pa-md bg-black">
                  <div class="text-h6 text-weight-medium text-blue">
                    Price Offered:
                  </div>
                  <div class="flex justify-between text-h4 text-blue">
                    <div class="">$50,050.00</div>
                    <div>USD</div>
                  </div>
                </div>
              </div>
            </div>
            <!-- next buttons -->
          </div>
          <q-separator black class="q-mt-lg" />
          <div class="flex justify-end q-mt-lg q-mx-lg">
            <div
              class="text-subtitle2 text-bold text-grey-14 text-center flex justify-center items-center q-px-lg"
            >
              Print Offer
            </div>
            <q-btn
              color="black"
              label="Download Offer"
              style="height: 40px; width: 230px"
              class="line-height text-subtitle2 text-weight-medium"
            />
          </div>
        </q-drawer>
      </q-page>
    </q-page-container>
  </div>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(true);
const miniState = ref(false);

function drawerClick() {
  console.log("sasasasassas");
  if (miniState.value) {
    miniState.value = false;
  }
}

function toggleDrawer() {
  console.log("arham");
  if (drawer.value) {
    drawer.value = false;
  } else {
    drawer.value = true;
  }
}
</script>

<style lang="scss" scoped>
.submitted-drawer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(57, 56, 56, 0.8);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.submitted-drawer button {
  padding: 13px 13px;
  background-color: white;
  color: black;

  border: none;
  cursor: pointer;
}
.line-height {
  line-height: 0.76rem;
}
.height-border {
  height: 100px;
  border: 1px solid #d3d4d3;
}
</style>
