<script setup>
import Tablepage from '../components/Table.vue'
import axios from 'axios'
import {ref} from 'vue'
const columns = [
      { name: 'name', label: 'Name', field: 'name', align: 'left', sortable: true },
      { name: 'age', label: 'Age', field: 'age', align: 'center' },
      { name: 'email', label: 'Email', field: 'email' }
    ]
const dogs = ref([])
const fetchDogs = (page =0,limit=15 ) => { // we can specify the "page" to jump to
   
      return axios.get('https://table.quasarcomponents.com/dogs', {
        params: { page: page , limit:limit} // here, we tell the api what "page" to jump to
      })
        .then(response => {
          dogs.value = response.data.data
         
          const meta = response.data.meta


          pagination.value.page = meta.current_page
          pagination.value.rowsPerPage = meta.per_page
          pagination.value.rowsNumber = meta.total
        })
        .finally(() => {
          loading.value = false
        })
    }

    const onRequest = (props) => {
      fetchDogs(props.pagination.page,props.pagination.rowsPerPage)
    }

    // The initial fetch
    fetchDogs()


</script>
<template>
  <q-layout>

  <q-page-container>
    <q-page class="q-pa-xl">
    <Tablepage title="Latest Requests" :columns="columns" :rows="dogs" headerclasses="bg-primary text-white"  :tableStripe="true" :loading="false" :hidepaggination="false"
    :rowPerPage="[10,15,20,30]"
    />
    </q-page>
  </q-page-container>

</q-layout>
</template>



<style lang="scss" scoped>

</style>