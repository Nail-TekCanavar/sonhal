
function previewImage() {
  const fileInput = document.getElementById("fileInput");
  const preview = document.getElementById("preview");
  if (fileInput.files.length === 0) return alert("Lütfen bir dosya seçin.");

  const reader = new FileReader();
  reader.onload = function (e) {
    preview.src = e.target.result;
  };
  reader.readAsDataURL(fileInput.files[0]);
}

function saveCharacterImage() {
  const fileInput = document.getElementById("fileInput");
  const description = document.getElementById("description").value.trim();

  if (fileInput.files.length === 0) return alert("Lütfen bir görsel seçin.");
  if (!description) return alert("Açıklama/Poz/Tema girin.");

  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.onload = function (e) {
    const stored = JSON.parse(localStorage.getItem("characterGallery") || "[]");
    stored.push({
      image: e.target.result,
      desc: description,
      date: new Date().toLocaleString()
    });
    localStorage.setItem("characterGallery", JSON.stringify(stored));
    alert("AI karakter görseli kaydedildi!");
  };
  reader.readAsDataURL(file);
}
