<script>
import { ref } from 'vue';
import { deleteTodo } from '../service/TodosAPI.js'; // Adjust the path according to your project structure

export default {
    name: 'DeleteTodo',
    setup() {
        const todoId = ref('');

        const handleDelete = async () => {
            try {
                await deleteTodo(todoId.value);
                todoId.value = ''; // Reset the form
            } catch (error) {
                console.error('Error deleting task:', error.message);
            }
        };

        return {
            todoId,
            handleDelete,
        };
    },
};
</script>

<template>
    <div class="delete-todo">
        <h2>Delete Todo</h2>
        <form @submit.prevent="handleDelete">
            <div class="form-group">
                <label for="id">Todo ID</label>
                <input v-model="todoId" type="text" id="id" required>
            </div>
            <button type="submit">Delete Task</button>
        </form>
    </div>
</template>

<style scoped>
.delete-todo {
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

button {
    padding: 0.5em 1em;
    border: none;
    background-color: #dc3545;
    color: white;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #c82333;
}
</style>
