function checkPIN() {
  const correctPIN = "1984";
  const input = document.getElementById("pinInput").value;
  const errorMsg = document.getElementById("errorMsg");

  if (input === correctPIN) {
    document.querySelector(".login-container").style.display = "none";
    document.querySelector(".main-panel").style.display = "block";
    localStorage.setItem("sessionStarted", "true");
  } else {
    errorMsg.textContent = "Hatalı kod. Lütfen tekrar deneyin.";
  }
}

window.onload = () => {
  if (localStorage.getItem("sessionStarted") === "true") {
    document.querySelector(".login-container").style.display = "none";
    document.querySelector(".main-panel").style.display = "block";
  }
};