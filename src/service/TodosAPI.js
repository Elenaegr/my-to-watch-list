import { ref } from "vue";
// import toastService from "../main.js"; // Importa la instancia del servicio ToastService

const todos = ref([]);
const APIUrl = "https://node-todos.vercel.app/users/elena/todos";
// const deleteModal = ref(false);

// Utility function to handle API requests
const apiRequest = async (url, options) => {
  console.log("Requesting:", url, options);
  const response = await fetch(url, options);

  if (!response.ok) {
    console.error("Response status:", response.status);
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  // Check if the response has a body
  if (response.status !== 204) {
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const data = await response.json();
      console.log("Response data:", data);
      return data;
    }
  }

  // Return an empty object if there's no content
  return {};
};

// Utility function to handle toast notifications
// const showToast = (severity, summary, detail) => {
//   toastService.add({ severity, summary, detail, life: 3000 });
// };

// Fetch Todos
export const fetchTodos = async () => {
  try {
    const data = await apiRequest(APIUrl);
    todos.value = data;
  } catch (error) {
    console.log(error);
    // showToast("error", "Error", "Error fetching tasks");
  }
};

// Close delete modal
// const closeDeleteModal = () => {
//   deleteModal.value = false;
// };

// Add Todo
const addTodo = async (newTodo) => {
  try {
    const data = await apiRequest(APIUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    });
    todos.value.push(data);
    console.log("task added correctly");
    // showToast("success", "Success", "Task was added successfully");
  } catch (error) {
    console.log("error adding task");
    // showToast("error", "Error", "Error adding task");
  }
};

// Delete Todo
const deleteTodo = async (id) => {
  try {
    await apiRequest(`${APIUrl}/${id}`, {
      method: "DELETE",
    });
    todos.value = todos.value.filter((todo) => todo.id !== id);
    // showToast("success", "Task deleted", "Task was deleted successfully");
    console.log("task deleted correctly");
  } catch (error) {
    // showToast("error", "Error", "Error deleting task");
    console.log("error deleting task:", error.message);
  }
  //   closeDeleteModal();
};

// Edit Todo
const editTodo = async (id, newTodo) => {
  try {
    return await apiRequest(`${APIUrl}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    });
  } catch (error) {
    console.log("error editing task");
    // showToast("error", "Error", "Error editing task");
  }
};

export { todos, deleteTodo, addTodo, editTodo };
