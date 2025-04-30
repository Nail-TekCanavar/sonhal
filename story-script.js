window.onload = function () {
  const char1 = document.getElementById("char1");
  const char2 = document.getElementById("char2");
  const storyList = document.getElementById("storyList");

  for (let key in localStorage) {
    if (key.startsWith("karakter_")) {
      const char = JSON.parse(localStorage.getItem(key));
      const opt1 = document.createElement("option");
      const opt2 = document.createElement("option");
      opt1.value = opt2.value = char.name;
      opt1.text = opt2.text = char.name;
      char1.appendChild(opt1);
      char2.appendChild(opt2);
    }
  }

  loadStories();
};

document.getElementById("storyForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const char1 = document.getElementById("char1").value;
  const char2 = document.getElementById("char2").value;
  const type = document.getElementById("type").value;
  const description = document.getElementById("description").value;

  const story = {
    title,
    char1,
    char2,
    type,
    description,
    createdAt: new Date().toISOString()
  };

  const id = "story_" + Date.now();
  localStorage.setItem(id, JSON.stringify(story));

  alert("Senaryo kaydedildi!");
  location.reload();
});

function loadStories() {
  const storyList = document.getElementById("storyList");
  for (let key in localStorage) {
    if (key.startsWith("story_")) {
      const story = JSON.parse(localStorage.getItem(key));
      const div = document.createElement("div");
      div.className = "story-card";
      div.innerHTML = `
        <strong>Başlık:</strong> ${story.title}<br>
        <strong>Karakterler:</strong> ${story.char1} & ${story.char2}<br>
        <strong>Tür:</strong> ${story.type}<br>
        <strong>Açıklama:</strong> ${story.description}<br>
        <strong>Oluşturulma:</strong> ${new Date(story.createdAt).toLocaleString()}
      `;
      storyList.appendChild(div);
    }
  }
}