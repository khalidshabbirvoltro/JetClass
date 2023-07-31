<script setup>

const props = defineProps({
    title: String,
    headerclasses: String,
    columns: Array,
    rows: Array,
    tableStripe: Boolean,
    loading: Boolean,
    hidepaggination: Boolean,
    rowPerPage: Number

});
</script>

<template>
    <q-table card-class="" :table-header-class="headerclasses" flat bordered :title="title" :rows="rows" :columns="columns"
        row-key="name" :class="{ 'table-stripe': tableStripe }" :loading="loading" :hide-pagination="hidepaggination" 
        :rows-per-page-options="rowPerPage">
        <template v-slot:loading>
            <q-inner-loading showing color="primary" />
          
        </template>
        
    </q-table>
</template>

<style scoped>
.table-stripe :deep(tr:nth-child(even)) {
    background-color: #F2F4F7 !important;
}
</style>
