
document.getElementById("aiForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const characters = document.getElementById("characters").value;
  const type = document.getElementById("type").value;
  const prompt = document.getElementById("prompt").value;

  const finalPrompt = `Senaryo Türü: ${type}\nKarakterler: ${characters}\nSahne: ${prompt}\nDetaylı erotik ve tutarlı bir hikaye oluştur.`;

  const apiKey = "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";

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: finalPrompt }],
      temperature: 0.8,
    }),
  });

  const data = await response.json();
  const result = data.choices[0].message.content;

  document.getElementById("output").innerText = result;

  const scene = {
    title,
    characters,
    type,
    description: prompt,
    aiResult: result,
    createdAt: new Date().toISOString()
  };

  localStorage.setItem("ai_scene_" + Date.now(), JSON.stringify(scene));
});
