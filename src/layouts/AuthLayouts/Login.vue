<script setup>
import Login from '../../components/AuthComponents/Login.vue'
</script>
<template>
    <q-layout class="">
        <q-page-container>
            <q-page style="height: 100vh;">
                <div class="row">
                    <div class="col-md-7 bg-grey-11 xs-hide sm-hide">

                    </div>
                    <div class="col-12 col-md-5 q-pa-lg bg-white overflow-hidden-y  relative-position"
                        style="height: 100vh;">
                       <Login/>
                    </div>
                </div>
            </q-page>
        </q-page-container>
    </q-layout>
</template>
  



<style lang="scss" scoped></style>