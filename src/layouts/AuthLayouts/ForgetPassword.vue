<script setup>
import planeimg from '../../assets/loginplane.png'
import ForgetPassword from '../../components/AuthComponents/ForgetPassword.vue';
</script>
<template>
    <q-layout class="">
        <q-page-container>
            <q-page class="overflow-hidden-y relative-position">
                <div class="bg-grey-3 flex items-center justify-center  " style="height: 80vh;">
                    <div class=" q-pa-md flex column  text-center  ">
                         <div>

                            <ForgetPassword/>
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