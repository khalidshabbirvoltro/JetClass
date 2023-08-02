<script setup>
const props = defineProps({
    rows: {}, columns: {}, pagination: {}, onReuestFunction: {}, loading: {}, color: {}, title: {}, headerclasses: {}, tablestripe: {}, flat: {}, hidepaggination: {}, buttonNames:{},
    buttons: {
        type: Array,
        default: () => [],
    },
})

const isActionButton = (col) => {
  return props.buttonNames.includes(col.name);
};
</script>

<template>
    <q-table v-model:pagination="props.pagination" :title="props.title" :table-header-class="props.headerclasses"
        :class="{ 'table-stripe': props.tablestripe }" :hide-pagination="props.hidepaggination" :loading="loading"
        :rows="props.rows" :columns="props.columns" :flat="props.flat" @request="props.onReuestFunction">
        <template v-slot:loading>
            <q-inner-loading showing color="primary" />
        </template>
        <template v-slot:body-cell="{ row, col }">
            <q-td v-if="!isActionButton(col)">
                {{ row[col.field] }}
            </q-td>
            <q-td v-else class="text-center">
                <q-btn flat v-for="button in col.buttons"
                :class="button.class"
                 :key="button.label" :icon="button.icon" @click="button.action(row)">
                    {{ button.label }}
                </q-btn>
            </q-td>
        </template>

    </q-table>
</template>

<style scoped>
.table-stripe :deep(tr:nth-child(even)) {
    background-color: #F2F4F7 !important;
}
</style>
