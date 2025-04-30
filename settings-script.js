function setTheme(theme) {
  localStorage.setItem("theme", theme);
  document.body.className = theme;
}
function activateAdmin() {
  const pin = document.getElementById("adminPIN").value;
  if (pin === "9999") {
    localStorage.setItem("isAdmin", "true");
    document.getElementById("adminStatus").innerText = "✅ Admin yetkisi aktif!";
  } else {
    localStorage.removeItem("isAdmin");
    document.getElementById("adminStatus").innerText = "❌ Yanlış PIN";
  }
}
window.onload = () => {
  const theme = localStorage.getItem("theme") || "dark";
  document.body.className = theme;
};