<script>
import { ref } from 'vue';
import { editTodo } from '../service/TodosAPI.js';

export default {
    name: 'EditTodo',
    setup() {
        const todoId = ref('');
        const editTask = ref({
            text: '',
            description: '',
            completed: false,
            tags: [],
        });
        const newTag = ref('');

        const addTag = () => {
            if (newTag.value.trim() !== '') {
                editTask.value.tags.push(newTag.value.trim());
                newTag.value = '';
            }
        };

        const removeTag = (index) => {
            editTask.value.tags.splice(index, 1);
        };

        const handleSubmit = async () => {
            if (newTag.value.trim() !== '') {
                addTag();
            }
            try {
                await editTodo(todoId.value, editTask.value);
                todoId.value = '';
                editTask.value = { text: '', description: '', completed: false, tags: [] };
            } catch (error) {
                console.error('Error editing task:', error);
            }
        };

        return {
            todoId,
            editTask,
            newTag,
            addTag,
            removeTag,
            handleSubmit,
        };
    },
};
</script>

<template>
    <div class="edit-todo">
        <h2>Edit Todo</h2>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="id">Todo ID</label>
                <input v-model="todoId" type="text" id="id" required>
            </div>
            <div class="form-group">
                <label for="text">Text</label>
                <input v-model="editTask.text" type="text" id="text" required>
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <input v-model="editTask.description" type="text" id="description" required>
            </div>
            <div class="form-group">
                <label for="tags">Tags</label>
                <input v-model="newTag" type="text" id="tags" placeholder="Add a tag" @keyup.enter.prevent="addTag">
                <!-- <button @click.prevent="addTag">Add Tag</button> -->
                <div class="tags">
                    <span v-for="(tag, index) in editTask.tags" :key="index" class="tag">
                        {{ tag }}
                        <button @click="removeTag(index)">x</button>
                    </span>
                </div>
            </div>
            <button type="submit">Edit Task</button>
        </form>
    </div>
</template>

<style scoped>
.edit-todo {
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
    background-color: #ffc107;
    color: white;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #e0a800;
}
</style>
