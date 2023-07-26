<template>
    <div>


        <div class="q-px-md">
            <h5 class="q-ma-none text-bold">Forget Password?</h5>
            <h5 class="q-ma-none q-mt-sm text-bold">Please enter your email to reset your password.</h5>

        </div>

        <div class="row form_wrapper q-mt-xl flex justify-center">
            <div class="col-10">
                <form>
                    <div class="q-mt-lg text-left">
                        <q-label for="email">Enter your Email</q-label>
                        <q-input class=" q-mt-sm  bg-white" outlined v-model="email" type="email" placeholder="Email"
                            id="email" />
                    </div>
                    <div class="q-mt-md ">
                        <q-btn class="full-width q-py-md" color="black" label="SEND RESET REQUEST" type="submit" />
                    </div>
                </form>


            </div>

        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>