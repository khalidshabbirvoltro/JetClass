<script setup>
import planeimg from '../assets/loginplane.png'
</script>
<template>
    <q-layout class="">
        <q-page-container>
            <q-page class="overflow-hidden-y relative-position">
                <div class="bg-grey-3 flex items-center justify-center  " style="height: 80vh;">
                    <div class=" q-pa-md flex column  text-center  ">
                        <div>


                            <div class="q-px-md">
                                <h5 class="q-ma-none text-bold">Forget Password?</h5>
                                <h5 class="q-ma-none q-mt-sm text-bold">Please enter your email to reset your password.</h5>

                            </div>

                            <div class="row form_wrapper q-mt-xl flex justify-center">
                                <div class="col-10">
                                    <form >
                                        <div class="q-mt-lg text-left">
                                            <q-label for="email">Enter your Email</q-label>
                                            <q-input class=" q-mt-sm  bg-white" outlined v-model="email" type="email"
                                                placeholder="Email" id="email" />
                                        </div>
                                        <div class="q-mt-md ">
                                            <q-btn class="full-width q-py-md" color="black" label="SEND RESET REQUEST"
                                                type="submit" />
                                        </div>
                                    </form>


                                </div>

                            </div>
                        </div>
                        <div class="absolute-bottom q-mb-md  width-full ">
                            <img class="loginimgplan " :src="planeimg" alt="loginimg" width="520" />
                        </div>

                    </div>

                </div>

            </q-page>
        </q-page-container>
    </q-layout>
</template>



<style lang="css" scoped>
/* For extra small screens */
@media (max-width: 400px) {

    /* Adjust the width as desired */
    .loginimgplan {
        width: 75%;
    }
}
@media (min-width: 401px) and (max-width: 600px) {
  /* Adjust the width as desired */
  .loginimgplan {
        width: 60%;
    }
}


</style>