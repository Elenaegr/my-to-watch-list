<script>
import { ref } from 'vue';
import { addTodo } from '../service/TodosAPI.js';

export default {
    name: 'AddTodo',
    setup() {
        const newTask = ref({
            text: '',
            description: '',
            completed: false,
            tags: [],
        });
        const newTag = ref('');

        const addTag = () => {
            if (newTag.value.trim() !== '') {
                console.log('Adding tag:', newTag.value.trim()); // Debugging: Log the tag being added
                newTask.value.tags.push(newTag.value.trim());
                console.log('Tags after addition:', newTask.value.tags); // Debugging: Log the tags array after addition
                newTag.value = '';
            } else {
                console.log('Tag input is empty'); // Debugging: Log when the tag input is empty
            }
        };

        const removeTag = (index) => {
            newTask.value.tags.splice(index, 1);
            console.log('Tags after removal:', newTask.value.tags); // Debugging: Log the tags array after removal
        };

        const handleSubmit = async () => {
            // Ensure any pending tag is added before submitting
            if (newTag.value.trim() !== '') {
                addTag();
            }
            console.log('New Task before adding:', newTask.value); // Debugging: Log newTask value before adding
            try {
                await addTodo(newTask.value);
                console.log('Task added successfully:', newTask.value); // Debugging: Log newTask value after adding
                newTask.value = { text: '', description: '', completed: false, tags: [] }; // Reset the form
            } catch (error) {
                console.error('Error adding task:', error);
            }
        };

        return {
            newTask,
            newTag,
            addTag,
            removeTag,
            handleSubmit,
        };
    },
};
</script>

<template>
    <div class="add-todo">
        <h2>Add New Todo</h2>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="text">Text</label>
                <input v-model="newTask.text" type="text" id="text" required>
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <input v-model="newTask.description" type="text" id="description" required>
            </div>
            <div class="form-group">
                <label for="tags">Tags</label>
                <input v-model="newTag" type="text" id="tags" placeholder="Add a tag" @keyup.enter.prevent="addTag">
                <!-- <button @click.prevent="addTag">Add Tag</button> -->
                <div class="tags">
                    <span v-for="(tag, index) in newTask.tags" :key="index" class="tag">
                        {{ tag }}
                        <button @click="removeTag(index)">x</button>
                    </span>
                </div>
            </div>
            <button type="submit">Add Task</button>
        </form>
    </div>
</template>

<style scoped>
.add-todo {
    max-width: 400px;
    margin: 0 auto;
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.form-group {
    margin-bottom: 1em;
}

.form-group label {
    display: block;
    margin-bottom: 0.5em;
}

.form-group input {
    width: 100%;
    padding: 0.5em;
    box-sizing: border-box;
}

.tags {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.5em;
}

.tag {
    background-color: #007bff;
    color: white;
    border-radius: 3px;
    padding: 0.3em 0.5em;
    margin-right: 0.5em;
    margin-bottom: 0.5em;
    display: flex;
    align-items: center;
}

.tag button {
    background: none;
    border: none;
    color: white;
    margin-left: 0.3em;
    cursor: pointer;
}

button {
    padding: 0.5em 1em;
    border: none;
    background-color: #28a745;
    color: white;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #218838;
}
</style>
