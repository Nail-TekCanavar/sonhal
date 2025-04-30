window.onload = () => {
  const editData = localStorage.getItem("editCharacter");
  if (editData) {
    const character = JSON.parse(editData);
    document.getElementById("name").value = character.name;
    document.getElementById("age").value = character.age;
    document.getElementById("gender").value = character.gender;
    document.getElementById("physique").value = character.physique || "";
    document.getElementById("interests").value = character.interests || "";
    const prefs = character.preferences || [];
    document.querySelectorAll('input[name="prefs"]').forEach(checkbox => {
      checkbox.checked = prefs.includes(checkbox.value);
    });
    document.getElementById("editMode").value = "true";
  }
};

document.getElementById("charForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  const physique = document.getElementById("physique").value;
  const interests = document.getElementById("interests").value;
  const prefs = Array.from(document.querySelectorAll('input[name="prefs"]:checked')).map(el => el.value);

  const character = {
    name,
    age,
    gender,
    preferences: prefs,
    physique,
    interests,
    createdAt: new Date().toISOString()
  };

  const isEdit = document.getElementById("editMode").value === "true";

  if (isEdit) {
    const key = localStorage.getItem("editCharacterKey");
    localStorage.setItem(key, JSON.stringify(character));
    localStorage.removeItem("editCharacter");
    localStorage.removeItem("editCharacterKey");
    alert("Karakter güncellendi.");
  } else {
    localStorage.setItem("karakter_" + name, JSON.stringify(character));
    alert("Yeni karakter kaydedildi.");
  }

  window.location.href = "character-list.html";
});