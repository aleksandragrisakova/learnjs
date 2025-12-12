<script setup>
import { ref } from 'vue';
import Tabs from './components/Tabs.vue';

import ToDo from './pages/ToDo.vue';
import Modals from './pages/Modals.vue';

let activeTab = ref(0);
let titles = ref(['ToDo', 'Modals']);
let content = ref([
    ToDo,
    Modals,
]);

function setTab(index){
    activeTab.value = index;
}
</script>

<template>
    <Tab :active="activeTab" :titles="titles" @change="setTab"></Tab>
    <component :is="contens[activeTab]"></component>
</template>