<script setup>
import TableComponent from '../components/utils/FullTable.vue'
import axios from 'axios'
import { ref, reactive } from 'vue'
const selectedRows = ref([])

const columns = [

  { name: 'name', label: 'Name', field: 'name', align: 'left' },
  { name: 'age', label: 'Age', field: 'age', align: 'left' },
  { name: 'email', label: 'Email', field: 'email', align: 'left' },
  {
    name: 'edit', // A custom identifier for the column
    label: 'Edit',
    align: 'center',
    buttons: [
      {
        label: '',
        icon: 'edit',
        action: (row) => {
          console.log('Edit clicked for row:', row.id);
          // Add your edit logic here
        },
        class: 'bg-dark text-white',
      },
    ],
  },
  {
    name: 'delete', // A custom identifier for the column
    label: 'Delete',
    align: 'center',
    buttons: [
      {
        label: '',
        icon: 'delete',

        action: (row) => {
          console.log('Delete clicked for row:', row);
          // Add your delete logic here
        },
      },
    ],

  },



]

const dogs = ref([])
let loading = false;
const pagination = reactive({
  page: 1,
  rowsPerPage: 10,
  rowsNumber: 1
})
const fetchDogs = (page = 0, limit = 10) => {

  loading = true;
  return axios.get('https://table.quasarcomponents.com/dogs', {
    params: { page: page, limit: limit }
  })
    .then(response => {
      dogs.value = response.data.data
      const meta = response.data.meta
      pagination.page = meta.current_page
      pagination.rowsPerPage = meta.per_page
      pagination.rowsNumber = meta.total
      loading = false
    })
    .finally(() => {
      loading = false
    })
}

const onRequest = (props) => {
  fetchDogs(props.pagination.page, props.pagination.rowsPerPage)
}

fetchDogs()
const handleSelection = (selectedRows) => {
  console.log(selectedRows)
}

</script>
<template>
  <q-layout>

    <q-page-container>
      <q-page class="q-pa-xl">
        <div class="q-my-lg">
          <h6 class="">Test Table</h6>
        </div>
        <TableComponent title="Table" :rows="dogs" :columns="columns" headerclasses="bg-dark text-white"
          :pagination="pagination" :onReuestFunction="onRequest" :loading="loading" :tablestripe="true" :flat="true"
          :buttons="tableButtons" :buttonNames="['edit', 'delete']" :fullscreen="false"
          :visible_columns="['age', 'name', 'edit', 'delete']" :bordered="true" card_class="" :hide_header="false"
          :hide_bottom="false" selection="multiple" :dense="false" @selection-changed="handleSelection" />
      </q-page>
    </q-page-container>

  </q-layout>
</template>



<style lang="scss" scoped></style>