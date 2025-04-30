window.onload = function () {
  const listContainer = document.getElementById("charList");
  for (let key in localStorage) {
    if (key.startsWith("karakter_")) {
      const data = JSON.parse(localStorage.getItem(key));
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <strong>İsim:</strong> ${data.name}<br>
        <strong>Yaş:</strong> ${data.age}<br>
        <strong>Cinsiyet:</strong> ${data.gender}<br>
        <strong>Tercihler:</strong> ${data.preferences?.join(", ") || "-"}<br>
        <strong>Fiziksel:</strong> ${data.physique || "-"}<br>
        <strong>Fanteziler:</strong> ${data.interests || "-"}<br>
        <strong>Oluşturulma:</strong> ${new Date(data.createdAt).toLocaleString()}<br>
        <button class="edit-btn" onclick="editCharacter('${key}')">Düzenle</button>
        <button class="delete-btn" onclick="deleteCharacter('${key}')">Sil</button>
        <button class="edit-btn" onclick="viewCharacter('${key}')">Profil</button>
      `;
      listContainer.appendChild(card);
    }
  }
};

function deleteCharacter(key) {
  if (confirm("Bu karakteri silmek istediğine emin misin?")) {
    localStorage.removeItem(key);
    location.reload();
  }
}

function editCharacter(key) {
  const data = localStorage.getItem(key);
  localStorage.setItem("editCharacter", data);
  localStorage.setItem("editCharacterKey", key);
  window.location.href = "character.html";
}

function viewCharacter(key) {
  const data = localStorage.getItem(key);
  localStorage.setItem("viewCharacter", data);
  window.location.href = "profile.html";
}