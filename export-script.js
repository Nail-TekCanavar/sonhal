function exportData() {
  const allData = {};
  for (let key in localStorage) {
    if (
      key.startsWith("karakter_") ||
      key.startsWith("story_") ||
      key.startsWith("ai_scene_")
    ) {
      allData[key] = localStorage.getItem(key);
    }
  }
  const blob = new Blob([JSON.stringify(allData, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "yedek_veri.json";
  link.click();
  URL.revokeObjectURL(url);
}
function importData() {
  const file = document.getElementById("importFile").files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function (event) {
    const data = JSON.parse(event.target.result);
    let count = 0;
    for (let key in data) {
      localStorage.setItem(key, data[key]);
      count++;
    }
    document.getElementById("resultMsg").innerText = `${count} veri başarıyla içe aktarıldı. Sayfayı yenile.`;
  };
  reader.readAsText(file);
}