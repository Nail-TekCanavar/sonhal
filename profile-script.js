window.onload = () => {
  const data = localStorage.getItem("viewCharacter");
  if (!data) {
    document.getElementById("profileView").innerHTML = "<p>Karakter bulunamadı.</p>";
    return;
  }

  const char = JSON.parse(data);
  document.getElementById("profileView").innerHTML += `
    <p><strong>İsim:</strong> ${char.name}</p>
    <p><strong>Yaş:</strong> ${char.age}</p>
    <p><strong>Cinsiyet:</strong> ${char.gender}</p>
    <p><strong>Tercihler:</strong> ${char.preferences?.join(", ") || "-"}</p>
    <p><strong>Fiziksel Özellikler:</strong> ${char.physique || "-"}</p>
    <p><strong>Fanteziler / İlgi Alanları:</strong> ${char.interests || "-"}</p>
    <p><strong>Oluşturulma Tarihi:</strong> ${new Date(char.createdAt).toLocaleString()}</p>
  `;
};