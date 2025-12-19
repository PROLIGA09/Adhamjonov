const express = require("express");
const app = express();

let video = {
  views: 0,
  likes: 0
};

app.get("/", (req, res) => {
  video.views++;

  res.send(`
<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Mini Video Site</title>

  <style>
    body {
      background: #0f172a;
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      color: white;
    }

    .card {
      background: #1e293b;
      padding: 20px;
      border-radius: 12px;
      width: 420px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
      text-align: center;
    }

    video {
      width: 100%;
      border-radius: 10px;
      margin-bottom: 15px;
    }

    .stats {
      display: flex;
      justify-content: space-between;
      margin: 10px 0;
      font-size: 16px;
    }

    button {
      background: #ef4444;
      border: none;
      color: white;
      padding: 12px;
      width: 100%;
      border-radius: 8px;
      font-size: 16px;
      cursor: pointer;
      transition: 0.2s;
    }

    button:hover {
      background: #dc2626;
    }
  </style>
</head>

<body>
  <div class="card">
    <h2>🎬 Mini Video</h2>

    <video controls>
      <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
    </video>

    <div class="stats">
      <div>👁 <span id="views">${video.views}</span></div>
      <div>❤️ <span id="likes">${video.likes}</span></div>
    </div>

    <button onclick="likeVideo()">👍 Like</button>
  </div>

  <script>
    async function likeVideo() {
      const res = await fetch("/like", { method: "POST" });
      const data = await res.json();
      document.getElementById("likes").innerText = data.likes;
    }
  </script>
</body>
</html>
  `);
});

app.post("/like", (req, res) => {
  video.likes++;
  res.json({ likes: video.likes });
});

app.listen(3000, () => {
  console.log("Server http://localhost:3000 da ishlayapti");
});
