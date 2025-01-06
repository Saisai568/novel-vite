<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  console.log('當前路由：', router.currentRoute.value) // 用於調試
})
</script>

<template>
  <div id="app">
    <header>
      <h1>小說閱讀網站</h1>
      <nav>
        <router-link to="/">首頁</router-link>
        <router-link to="/novels">小說列表</router-link>
        <router-link to="/about">關於我們</router-link>
      </nav>
    </header>
    
    <main>
      <div class="router-container">
        <router-view />
      </div>
    </main>

    <footer>
      <p>© 2025 小說閱讀網站</p>
    </footer>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
/* 全局樣式 */
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  color: #333;
}

header {
  background-color: #f4f4f4;
  padding: 10px;
  margin-bottom: 20px;
}

nav {
  margin-top: 10px;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #007bff;
}

nav a:hover {
  text-decoration: underline;
}

footer {
  background-color: #f4f4f4;
  padding: 10px;
  margin-top: 20px;
}

.router-container {
  min-height: 300px;  /* 確保有足夠的顯示空間 */
  padding: 20px;
}

.logos {
  margin: 20px 0;
}
</style>
