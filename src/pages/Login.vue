<script setup>
import { ref } from 'vue'
const email = ref("")
const password = ref("")
const isPwd = ref(true);
</script>
<template>
    <q-layout class="">
        <q-page-container>
            <q-page>
                <div class="row" style="height: 100vh;">
                    <div class="col-md-7 bg-grey-11 xs-hide sm-hide">
                        <!-- Placeholder content for the left section -->
                    </div>
                    <div class="col-12 col-md-5 q-pa-xl bg-white overflow-hidden-y" style="height: 100vh;">
                        <div class="content-wrapper">
                        <div class="link-wrapper q-mb-xl">
                            <router-link class="text-dark" to="/">www.jetclass.com</router-link>
                        </div>
                        <div class="logo-wrapper q-mb-xl">
                            <h6>Logo</h6>
                        </div>
                        <div class="text-wrapper">
                            <h4 class="q-ma-none">Login JetClass</h4>
                            <h5 class="q-ma-none q-mt-sm">community so we can grow together</h5>
                        </div>
                        <form @submit="login">
                            <div class="q-mt-lg">
                                <q-label for="email">Enter your Email</q-label>
                                <q-input class=" q-mt-sm" outlined v-model="email" type="email" placeholder="Email"
                                    id="email" />
                            </div>
                            <div class="q-mt-lg">
                                <q-label for="password">Enter your Password</q-label>
                                <q-input class="q-mt-sm" v-model="password" placeholder="Password" outlined
                                    :type="isPwd ? 'password' : 'text'">
                                    <template v-slot:append>
                                        <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                                            @click="isPwd = !isPwd" />
                                    </template>
                                </q-input>
                            </div>
                            <div class="q-mt-md text-right">
                                <router-link class="text-dark" style="text-decoration: none;" to="/">Forget
                                    Password?</router-link>
                            </div>
                            <div class="q-mt-md">
                                <q-btn class="full-width" color="black" label="LOGIN" type="submit" />
                            </div>
                        </form>
                        <div class="q-mt-xl">
                            <router-link class="text-dark" to="/" style="text-decoration: none;">Terms & Conditions &
                                Privacy Policy</router-link>
                        </div>
                    </div>
                    </div>
                </div>
            </q-page>
        </q-page-container>
    </q-layout>
</template>
  



<style lang="scss" scoped></style>