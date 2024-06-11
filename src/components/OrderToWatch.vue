<template>
    <div class="card xl:flex xl:justify-content-center">
        <OrderList v-model="products" listStyle="height:auto" dataKey="id">
            <template #header> List of Products </template>
            <template #item="slotProps">
                <div class="flex flex-wrap p-2 align-items-center gap-3">
                    <div class="flex-1 flex flex-column gap-2">
                        <span class="font-bold">{{ slotProps.item.name }}</span>
                        <div class="flex align-items-center gap-2">
                            <i class="pi pi-tag text-sm"></i>
                            <span>{{ slotProps.item.category }}</span>
                        </div>
                    </div>
                    <span class="font-bold">$ {{ slotProps.item.price }}</span>
                </div>
            </template>
        </OrderList>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import OrderList from 'primevue/orderlist';

const products = ref([]);

onMounted(() => {
    products.value = [
        { id: 1, name: 'Bamboo Watch', category: 'Accessories', price: 65, image: 'bamboo-watch.jpg' },
        { id: 2, name: 'Black Watch', category: 'Accessories', price: 72, image: 'black-watch.jpg' },
        { id: 3, name: 'Blue Band', category: 'Fitness', price: 79, image: 'blue-band.jpg' },
        { id: 4, name: 'Blue T-Shirt', category: 'Clothing', price: 29, image: 'blue-t-shirt.jpg' },
        { id: 5, name: 'Bracelet', category: 'Accessories', price: 15, image: 'bracelet.jpg' },
        { id: 6, name: 'Brown Purse', category: 'Accessories', price: 120, image: 'brown-purse.jpg' },
        { id: 7, name: 'Chakra Bracelet', category: 'Accessories', price: 32, image: 'chakra-bracelet.jpg' },
        { id: 8, name: 'Galaxy Earrings', category: 'Accessories', price: 34, image: 'galaxy-earrings.jpg' },
        { id: 9, name: 'Game Controller', category: 'Electronics', price: 99, image: 'game-controller.jpg' },
        { id: 10, name: 'Gaming Set', category: 'Electronics', price: 299, image: 'gaming-set.jpg' },
    ];
});
</script>

<style>
/* Add any styles you need for the component here */
</style>
