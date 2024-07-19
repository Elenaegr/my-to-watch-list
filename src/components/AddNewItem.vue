<script setup>
import { ref } from 'vue';
import AddTodo from './AddTodo.vue';
import DeleteTodo from './DeleteTodo.vue';
import EditTodo from './EditTodo.vue';

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
const todos = ref([]);

// New reactive property for the selected tag
const selectedTag = ref(null);

// Fetch Todos Function
const fetchTodos = async () => {
    try {
        const response = await fetch("https://node-todos.vercel.app/users/elena/todos");
        const data = await response.json();
        todos.value = data;
    } catch (error) {
        console.error('Error fetching todos:', error);
    }
};

// Function to log todos to the console
const logTodos = () => {
    console.log(todos.value);
};

// Fetch todos when the component is mounted
fetchTodos();

// Function to handle tag selection and log its value
const selectTag = (tag) => {
    selectedTag.value = tag;
};
</script>

<template>
    <div class="card">
        <Panel header="Add new item to the list" toggleable>
            <h3>Select the category</h3>
            <div>
                <Tag value="Movie" rounded class="tag-margin" :class="{ 'selected-tag': selectedTag === 'Movie' }"
                    @click="selectTag('Movie')"></Tag>
                <Tag severity="info" value="Documentary" rounded class="tag-margin"
                    :class="{ 'selected-tag': selectedTag === 'Documentary' }" @click="selectTag('Documentary')"></Tag>
                <Tag severity="warning" value="Series" rounded class="tag-margin"
                    :class="{ 'selected-tag': selectedTag === 'Series' }" @click="selectTag('Series')"></Tag>
                <Tag severity="danger" value="TV show" rounded class="tag-margin"
                    :class="{ 'selected-tag': selectedTag === 'TV show' }" @click="selectTag('TV show')"></Tag>
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
                <Button type="button" severity="info" label="Log Todos" @click="logTodos" raised />
            </div>
            <div>
                <AddTodo />
                <DeleteTodo />
                <EditTodo />
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

.selected-tag {
    border: 2px solid #555555;
    /* Add a blue outline (or any color you prefer) */
    padding: 0.25rem 0.5rem;
    /* Ensure padding to maintain size and spacing */
    /* Change this to your preferred selected color */
}
</style>