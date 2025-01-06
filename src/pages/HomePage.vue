<!-- src/pages/HomePage.vue -->
<template>
    <div>
      <h1>小說閱讀網站</h1>
      <div class="novels">
        <div v-for="novel in novels" :key="novel.id" class="novel">
          <router-link :to="`/novel/${novel.id}`">
            <img :src="`/assets/${novel.image}`" :alt="novel.title" />
            <h2>{{ novel.title }}</h2>
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useNovelStore } from '@/stores/novelStore';
  
  export default {
    setup() {
      const novelStore = useNovelStore();
      return {
        novels: novelStore.novels,
      };
    },
  };
  </script>
  