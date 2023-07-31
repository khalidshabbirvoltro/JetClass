<template>
   <q-table
        v-model:pagination="pagination"
      
        color="secondary"
        :loading="loading"
        :rows="dogs"
        :columns="columns"
        @request="onRequest"
      />
</template>

<script setup>
import {ref} from 'vue'
import axios from 'axios'
const loading = ref(true)
   
    const dogs = ref([])
    const pagination = ref({
      page: 1,
      rowsPerPage: 10,
      rowsNumber: 1
    })

    const columns = [
      { name: 'name', label: 'Name', field: 'name', align: 'left', sortable: true },
      { name: 'age', label: 'Age', field: 'age', align: 'center' },
      { name: 'email', label: 'Email', field: 'email' }
    ]

    // Fetch dogs
    const fetchDogs = (page =0,limit=100 ) => { // we can specify the "page" to jump to
      loading.value = true
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

<style lang="scss" scoped>

</style>