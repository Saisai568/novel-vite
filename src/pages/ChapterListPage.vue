<!-- src/pages/ChapterListPage.vue -->
<template>
    <div>
      <h1>章節列表</h1>
      <ul>
        <li v-for="chapter in chapters" :key="chapter.id">
          <router-link :to="`/novel/${novelId}/chapter/${chapter.id}`">
            {{ chapter.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { useNovelStore } from '@/stores/novelStore';
  import { useRoute } from 'vue-router';
  
  export default {
    setup() {
      const route = useRoute();
      const novelId = parseInt(route.params.id, 10);
      const novelStore = useNovelStore();
      const chapters = novelStore.getChapters(novelId);
  
      return {
        novelId,
        chapters,
      };
    },
  };
  </script>
  