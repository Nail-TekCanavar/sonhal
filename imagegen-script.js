
document.getElementById("imgForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const desc = document.getElementById("desc").value;

  const fullPrompt = `${name} karakteri: ${desc} stilinde detaylı çizim, dijital sanat`;

  const apiKey = "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";

  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "dall-e-3",
      prompt: fullPrompt,
      n: 1,
      size: "1024x1024"
    }),
  });

  const data = await response.json();
  const imageUrl = data.data[0].url;

  const imageBox = document.getElementById("imageBox");
  imageBox.innerHTML = `<img src="${imageUrl}" alt="AI Üretilen Görsel"><br><a href="${imageUrl}" download>Görseli İndir</a>`;
});
