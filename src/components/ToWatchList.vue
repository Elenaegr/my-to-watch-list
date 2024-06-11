<!-- eslint-disable  -->
<script setup>
import CardComponent from './CardComponent.vue'
import OrderToWatch from './OrderToWatch.vue'
import { ref } from 'vue'

const value = ref('')
const selectedGenre = ref(null)
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
  <h2>My to-watch list</h2>
  <div class="card">
    <Message severity="success">Item added correctly</Message>
  </div>
  <Button label="All" severity="secondary" rounded outlined badge="15" />
  <Button label="Movie" severity="secondary" rounded outlined badge="5" />
  <Button label="Documentary" severity="secondary" rounded outlined badge="3" />
  <Button label="Series" severity="secondary" rounded outlined badge="5" />
  <Button label="TV show" severity="secondary" rounded outlined badge="2" />

  <div class="filters-container">
    <div class="filter-item">
      <h3>Filter by title</h3>
      <InputText type="text" v-model="value" placeholder="Type title" />
    </div>
    <div class="filter-item">
      <h3>Filter by genre</h3>
      <Dropdown v-model="selectedGenre" :options="genres" placeholder="Genre" class="w-full md:w-14rem" />
    </div>
  </div>
  <h3>Pending media to watch (13)</h3>
  <OrderToWatch></OrderToWatch>
  <!-- eslint-disable vue/no-multiple-template-root -->
  <h3>Already watched (2)</h3>
  <OrderToWatch></OrderToWatch>
</template>

<style scoped>
.filters-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.filter-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 1rem;
}

Button {
  margin: 5px;
}

@media (max-width: 768px) {
  .filters-container {
    flex-direction: column;
  }
}
</style>
