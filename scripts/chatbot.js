const openaiApiKey = "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";

function askChatGpt(prompt) {
  return fetch("https://api.openai.com/v1/engines/text-davinci-002/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + openaiApiKey,
    },
    body: JSON.stringify({
      prompt: prompt,
      temperature: 0.5,
      max_tokens: 1024,
      n: 1,
      stop: null,
      frequency_penalty: 0,
      presence_penalty: 0,
    }),
  })
  .then(response => response.json())
  .then(data => data.choices[0].text.trim());
}

const chatbotDialogue = document.getElementById("chatbot-dialogue");
const chatbotInput = document.getElementById("chatbot-input");

chatbotInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    const message = chatbotInput.value;
    chatbotInput.value = "";

    chatbotDialogue.innerHTML += "<p>You: " + message + "</p>";

    askChatGpt(message)
    .then(response => {
      chatbotDialogue.innerHTML += "<p>ChatGPT: " + response + "</p>";
    });
  }
});