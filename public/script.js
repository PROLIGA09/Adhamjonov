async function loadVideo() {
  const res = await fetch("/api/video");
  const data = await res.json();

  document.getElementById("views").innerText = data.views;
  document.getElementById("likes").innerText = data.likes;
}

async function likeVideo() {
  const res = await fetch("/api/like", {
    method: "POST"
  });
  const data = await res.json();

  document.getElementById("likes").innerText = data.likes;
}

loadVideo();
