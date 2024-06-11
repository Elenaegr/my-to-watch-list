<script setup>
import { ref } from "vue";
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

const checked = ref(false);
const confirm = useConfirm();
const toast = useToast();
const confirm2 = (event) => {
    confirm.require({
        target: event.currentTarget,
        message: 'Do you want to delete this record?',
        icon: 'pi pi-info-circle',
        rejectClass: 'p-button-secondary p-button-outlined p-button-sm',
        acceptClass: 'p-button-danger p-button-sm',
        rejectLabel: 'Cancel',
        acceptLabel: 'Delete',
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};
</script>

<template>
    <Card style="width: 25rem; overflow: hidden; margin: 10px 0 10px 0">
        <template #content>
            <div class="content-container">
                <div class="item-info">
                    <div class="tags-container flex gap-3 mt-1">
                        <Checkbox v-model="checked" :binary="true" />
                        <span style="font-weight: bold;">Item title</span>
                    </div>
                    <div class="tags-container flex gap-3 mt-1">
                        <span>Horror</span>
                        <Tag value="Movie" rounded></Tag>
                    </div>
                </div>
                <Toast />
                <ConfirmPopup></ConfirmPopup>
                <Button @click="confirm2($event)" class="trash-button" icon="pi pi-trash" severity="danger" text raised
                    rounded aria-label="Cancel" />
            </div>
        </template>
    </Card>
</template>
<style>
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
