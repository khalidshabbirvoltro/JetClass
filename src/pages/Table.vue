<script setup>
import TableComponent from '../components/Table.vue'
import axios from 'axios'
import { ref,reactive } from 'vue'
const columns = [
  { name: 'name', label: 'Name', field: 'name', align: 'left', sortable: true },
  { name: 'age', label: 'Age', field: 'age', align: 'center',  sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  { name: 'email', label: 'Email', field: 'email' }
]
const dogs = ref([])

const pagination = reactive({
      page: 1,
      rowsPerPage: 10,
      rowsNumber: 1
    })
const fetchDogs = (page = 0, limit = 10) => { 
     
  return axios.get('https://table.quasarcomponents.com/dogs', {
    params: { page: page, limit: limit } 
  })
    .then(response => {
      
      dogs.value = response.data.data
    
      const meta = response.data.meta
      pagination.page = meta.current_page
      pagination.rowsPerPage = meta.per_page
      pagination.rowsNumber = meta.total
    })
    .finally(() => {
   
    })
}

const onRequest = (props) => {
  fetchDogs(props.pagination.page, props.pagination.rowsPerPage)
}

fetchDogs()


</script>
<template>
  <q-layout>

    <q-page-container>
      <q-page class="q-pa-xl">
        <TableComponent title="Table" :rows="dogs" :columns="columns" headerclasses="bg-dark text-white" :pagination="pagination" :onReuestFunction="onRequest" :loading="false" :tablestripe="true" :flat="flat" :hidepaggination="true"/>
      </q-page>
    </q-page-container>

  </q-layout>
</template>



<style lang="scss" scoped></style>