<script setup>
import { ref } from 'vue';

const value = ref(null);

const selectedGenre = ref(null);
const genres = ref([
    "Action & Adventure",
    "Anime",
    "Children & Family",
    "Classic",
    "Comedies",
    "Documentaries",
    "Dramas",
    "Horror",
    "Music",
    "Romantic",
    "Sci-fi & Fantasy",
    "Sports",
    "Thrillers"
]);
</script>

<template>
    <div class="card">
        <Panel header="Add new item to the list" toggleable>
            <!-- <h2>Add new item to the list</h2> -->
            <h3>Select the category</h3>
            <div>
                <Tag value="Movie" rounded class="tag-margin"></Tag>
                <Tag severity="info" value="Documentary" rounded class="tag-margin"></Tag>
                <Tag severity="warning" value="Series" rounded class="tag-margin"></Tag>
                <Tag severity="danger" value="TV show" rounded class="tag-margin"></Tag>
            </div>
            <h3>Add the title of the item</h3>
            <div class="card flex justify-content-center">
                <InputText type="text" v-model="value" placeholder="Insert the title" />
            </div>
            <h3>Select the genre</h3>
            <div class="card flex justify-content-center">
                <Dropdown v-model="selectedGenre" :options="genres" placeholder="Genre" class="w-full md:w-14rem" />
            </div>
            <div class="card flex-wrap gap-3 button-container">
                <Button type="button" severity="secondary" label="Add item" raised />
            </div>
        </Panel>
    </div>
</template>
<style scoped>
.tag-margin {
    margin: 5px;
}

.button-container {
    display: flex;
    justify-content: center;
    margin-top: 3rem;
}
</style>