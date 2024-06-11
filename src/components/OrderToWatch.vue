<template>
    <div class="card xl:flex xl:justify-content-center">
        <OrderList v-model="products" listStyle="height:auto" dataKey="id">
            <template #item="slotProps">
                <Card style="overflow: hidden; margin: 10px 0 10px 0">
                    <template #content>
                        <div class="content-container">
                            <div class="item-info">
                                <div class="tags-container flex gap-3 mt-1">
                                    <Checkbox v-model="checked" :binary="true" />
                                    <span style="font-weight: bold;">{{ slotProps.item.name }}</span>
                                </div>
                                <div class="tags-container flex gap-3 mt-1">
                                    <span>{{ slotProps.item.category }}</span>
                                    <Tag value="Movie" rounded></Tag>
                                </div>
                            </div>
                            <Toast />
                            <ConfirmPopup></ConfirmPopup>
                            <Button @click="confirm2($event)" class="trash-button" icon="pi pi-trash" severity="danger"
                                text raised rounded aria-label="Cancel" />
                        </div>
                    </template>
                </Card>
            </template>
        </OrderList>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import OrderList from 'primevue/orderlist';
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

const products = ref([]);
const checked = ref(false);
const confirm = useConfirm();
const toast = useToast();
const confirm2 = (event) => {
    confirm.require({
        target: event.currentTarget,
        message: 'Do you want to delete this item?',
        icon: 'pi pi-info-circle',
        rejectClass: 'p-button-secondary p-button-outlined p-button-sm',
        acceptClass: 'p-button-danger p-button-sm',
        rejectLabel: 'Cancel',
        acceptLabel: 'Delete',
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Item deleted', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};

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

<style scoped>
.p-card .p-card-body {
    display: flex;
    flex-direction: column;
    gap: 0rem;
    padding: 1rem;
}

.content-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.tags-container {
    display: flex;
    gap: 0.5rem;
}

.item-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.trash-button {
    margin-left: auto;
}
</style>
