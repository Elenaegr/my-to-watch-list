<script setup>
import { ref, computed } from 'vue';

const email = ref('');
const password = ref('');
const checked = ref(false);

</script>

<template>
    <div class="card">
        <div class="flex flex-column md:flex-row">
            <div class="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5">
                <div class="flex flex-wrap justify-content-center align-items-center gap-2">
                    <label class="w-6rem">Username</label>
                    <InputText id="username" type="text" class="w-12rem" />
                </div>
                <div class="flex flex-wrap justify-content-center align-items-center gap-2">
                    <label class="w-6rem">Password</label>
                    <InputText id="password" type="password" class="w-12rem" />
                </div>
                <Button label="Login" icon="pi pi-user" class="w-10rem mx-auto"></Button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.pi-eye {
    transform: scale(1.6);
    margin-right: 1rem;
}

.pi-eye-slash {
    transform: scale(1.6);
    margin-right: 1rem;
}
</style>