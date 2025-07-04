# 🧱 DragDrop Play

An interactive drag-and-drop animation playground inspired by Scratch, built using **React**, **TailwindCSS**, and **Webpack**.

### 🌐 Live 
> ⚠️ **Note:**  
> This app is hosted on [Render](https://render.com), which may take **30–60 seconds** to start if it has been idle.  
> You may initially see a `502 Bad Gateway` error — please wait a moment and refresh the page. The server will start shortly. 🙏

👉 [View Deployed App](https://dragdrop-play.onrender.com)

---
## 📽️ Screen Recording

<a href="https://youtu.be/sr1jhe3etdE" target="_blank"> <img src="https://img.youtube.com/vi/sr1jhe3etdE/hqdefault.jpg" alt="Watch Demo on YouTube" width="600" style="cursor: pointer;" /> </a>


-------

## 🔥 Features

- 🧩 **Drag-and-Drop Interface**  
  Click and drag sprites across designated areas.

- 🐱 **Multiple Sprites Support**  
  Add and animate multiple sprites with unique block instructions.

- 🛠 **Custom Block Actions**  
  Add actions like `say "Hello"`, `move 10 steps`, and repeat animations.

- 🦸 **Hero Feature (Collision Swap)**  
  When two sprites collide, they swap their motion behavior (e.g., direction and speed).

- ▶️ **Play Button**  
  Starts all sprite animations at once.

---

## 🛠 Tech Stack

- React
- TailwindCSS
- Webpack
- HTML Webpack Plugin
- Render (for deployment)

---

## 📁 Project Structure

```
src/
│
├── components/
│   ├── CatSprite.js
│   ├── CarSprite.js
│   ├── Sidebar.js
│   ├── MidArea.js
│   └── PreviewArea.js
│
├── App.js
├── index.js
└── index.css
```

---

## 🚀 Getting Started

Follow the steps below to run this project locally:

### 1. Clone the Repository
```bash
git clone https://github.com/YEAGERIST20/dragdrop-play.git
cd dragdrop-play
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Build for Production
```bash
npm run build
```

### 4. Run Locally
```bash
npm start
```


