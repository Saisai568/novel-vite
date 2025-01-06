// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import ChapterListPage from '@/pages/ChapterListPage.vue';
import ChapterContentPage from '@/pages/ChapterContentPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/novel/:id', component: ChapterListPage },
  { path: '/novel/:id/chapter/:chapterId', component: ChapterContentPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
