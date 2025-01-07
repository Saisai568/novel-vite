# 小說閱讀網站

這是一個使用 Vue 3 + Vite 開發的線上小說閱讀平台。

## 功能特點

- 首頁展示小說列表
- 章節瀏覽功能
- 響應式設計，支援多種設備
- 使用 Vue Router 進行路由管理
- 使用 Pinia 進行狀態管理

## 技術棧

- Vue 3
- Vite
- Vue Router
- Pinia
- CSS3

## 開始使用

1. 安裝依賴：
```bash
npm install
```

2. 啟動開發環境：

```bash
npm run dev
```

3. 建置專案：
```bash
npm run build
```

4. 部署到 GitHub Pages：
```bash
npm run deploy
```

## 專案結構


```plaintext
src/
├── assets/         # 靜態資源
├── components/     # 元件
├── pages/          # 頁面
├── router/         # 路由配置
├── stores/         # Pinia 狀態管理
├── App.vue         # 根元件
└── main.js         # 入口文件
```
## 路由設計

- `/`: 首頁，顯示小說列表
- `/novel/:id`: 顯示特定小說的章節列表
- `/novel/:id/chapter/:chapterId`: 顯示章節內容

## 開發團隊

終末異基 © 2025 小說閱讀網站

## 授權

本專案採用 MIT 授權條款