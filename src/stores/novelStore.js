// src/stores/novelStore.js
import { defineStore } from 'pinia';

export const useNovelStore = defineStore('novelStore', {
  state: () => ({
    novels: [
      { id: 1, title: '小說一', image: 'novel1.jpg', chapters: [] },
      { id: 2, title: '小說二', image: 'novel2.jpg', chapters: [] },
    ],
    chapters: {
      1: [
        { id: 1, title: '第一章', content: '這是第一章的內容...' },
        { id: 2, title: '第二章', content: '這是第二章的內容...' },
      ],
      2: [
        { id: 1, title: '第一章', content: '小說二的第一章內容...' },
      ],
    },
  }),
  getters: {
    getChapters: (state) => (novelId) => state.chapters[novelId] || [],
    getChapterContent: (state) => (novelId, chapterId) =>
      state.chapters[novelId]?.find((chapter) => chapter.id === chapterId),
  },
});
