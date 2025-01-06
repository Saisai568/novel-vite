<!-- src/pages/ChapterContentPage.vue -->
<template>
    <div>
      <h1>{{ chapter?.title }}</h1>
      <p>{{ chapter?.content }}</p>
    </div>
  </template>
  
  <script>
  import { useNovelStore } from '@/stores/novelStore';
  import { useRoute } from 'vue-router';
  
  export default {
    setup() {
      const route = useRoute();
      const novelId = parseInt(route.params.id, 10);
      const chapterId = parseInt(route.params.chapterId, 10);
      const novelStore = useNovelStore();
      const chapter = novelStore.getChapterContent(novelId, chapterId);
  
      return {
        chapter,
      };
    },
  };
  </script>
  