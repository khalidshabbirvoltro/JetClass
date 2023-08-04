<script setup>
import { ref } from 'vue'

const props = defineProps({
    rows: {}, columns: {}, pagination: {}, onReuestFunction: {}, loading: {}, color: {}, title: {}, headerclasses: {}, tablestripe: {}, flat: {},
    bordered: {},
    buttonNames: {},
    card_class: {},
    hide_header: {},
    hide_bottom: {},
    selection: {},
    fullscreen: {}, visible_columns: {},
    selection_state: {},
    dense: {},
    buttons: {
        type: Array,
        default: () => [],
    },
})

const isActionButton = (col) => {
    return props.buttonNames.includes(col.name);
};
// ===========================================
const emit = defineEmits(['selection-changed']);
const selected = ref([])
const emitSelection = (selectedRows) => {
    emit('selection-changed', selectedRows);
};
</script>

<template>
    <q-table v-model:pagination="props.pagination" :title="props.title" :table-header-class="props.headerclasses"
        :class="{ 'table-stripe': props.tablestripe }" :loading="loading" :rows="props.rows" :columns="props.columns"
        @request="props.onReuestFunction" :fullscreen="fullscreen" :visible-columns="visible_columns" :flat="props.flat"
        :bordered="bordered" :card-class="card_class" :hide-header="hide_header" :hide-bottom="hide_bottom" style=""
        :virtual-scroll="false" :selection="selection" v-model:selected="selected" @selection="emitSelection"
        :dense="dense">
        <template v-slot:loading>
            <q-inner-loading showing color="primary" />
        </template>
        <template v-slot:body-cell="{ row, col }">
            <q-td v-if="!isActionButton(col)">
                {{ row[col.field] }}
            </q-td>
            <q-td v-else class="text-center">
                <q-btn flat v-for="button in col.buttons" :class="button.class" :key="button.label" :icon="button.icon"
                    @click="button.action(row)">
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




<!------------------Seprator ---------------------------------

 separator="horizontal"             {for sperator horizontal}
 separator="vertical"             {for sperator horizontal}
 separator="cell"             {for sperator for each cell}
 separator="none"             {noe sperattor}

----------------------------------------------------------->
