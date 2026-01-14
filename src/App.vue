<script setup>
import Tabs from './components/Tabs.vue';
let activeTab = ref(0);
let titles = ref(['Pictures', 'Music', 'Videos', 'Documents', 'Games']);
let content = ref([
    'Some awesome Pictures',
    'Some awesome Music',
    'Some awesome Videos',
    'Some awesome Documents',
    'Some awesome Games',
])

function setTab(index){
    activeTab.value = index;
}
</script>

<template>
    <Tab :active="activeTab" :titles="titles" @change="setTab"></Tab>
    <div class="contentainer conetent">
       <h1>{{ contents[activeTab] }}</h1>
    </div>
</template>