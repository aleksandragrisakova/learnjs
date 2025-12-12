<script setup>
import { computed, ref } from 'vue';
import ItemList from '../components/ItemList.vue';

let message = ref('Hello Vue');
let isDanger = ref(false);
let newItem = ref('Viin');
let i = 0;
let items = ref([
    {id: i++, name: 'Õlu', isDone: true},
    {id: i++, name: 'Sai', isDone: false},
    {id: i++, name: 'Leib', isDone: true},
    {id: i++, name: 'Kohuke',isDone: false},
]);

function add(){
    if(newItem.value.trim() !==''){
    items.value.push({id: i++, name: newItem.value, isDone: false});
    }
    newItem.value = '';
}

let doneItems = computed(() => items.value.filter(item =>  item.isDone));
let toDoItems = computed(() => items.value.filter(item =>  !item.isDone));

</script>

<template>
    <div class="container mt-2">
        <div class="content">
            <button class="button is-primary" @click="message = 'Hello VM24'">Click me!</button>
            <h1>{{ message }}</h1>
            <button class="button" :class="{ 'is-danger': isDanger, 'is-warning': !isDanger }"
                @click="isDanger = !isDanger">Cool button</button>


            <div class="field has-addons mt-2">
                <div class="control is-expanded">
                    <input v-model="newItem" @keydown.enter="add" class="input" type="text" placeholder="Add item">
                </div>
                <div class="control">
                    <button class="button is-info" @click="add">
                        Add Item
                    </button>
                </div>
            </div>
             <h1>{{ newItem.split('').reverse().join('') }}</h1>

             <ItemList :items="items" title="All Items"></ItemList>
             <ItemList :items="doneTtems" title="done Items"></ItemList>
             <ItemList :items="toDoitems" title="toDo items"></ItemList>
        </div>
    </div>
</template>