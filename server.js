const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.static("public"));

let video = {
  views: 0,
  likes: 0
};

// Video ochilganda (view +1)
app.get("/api/video", (req, res) => {
  video.views++;
  res.json(video);
});

// Like bosilganda
app.post("/api/like", (req, res) => {
  video.likes++;
  res.json(video);
});

app.listen(3000, () => {
  console.log("Server http://localhost:3000 da ishlayapti");
});
