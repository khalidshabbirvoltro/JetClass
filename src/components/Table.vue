<script setup>

const props = defineProps(['rows','columns','pagination', 'onReuestFunction','loading','color','title','headerclasses','tablestripe','flat','hidepaggination'])



</script>

<template>
   <q-table v-model:pagination="props.pagination"   :title="props.title" :table-header-class="props.headerclasses" :class="{ 'table-stripe': props.tablestripe }" :hide-pagination="props.hidepaggination" :loading="loading" :rows="props.rows" :columns="props.columns"
             :flat="props.flat"
            @request="props.onReuestFunction" >
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
