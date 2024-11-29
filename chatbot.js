{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.addEventListener("DOMContentLoaded", () => \{\
  const sendButton = document.getElementById("send-button");\
  const userInput = document.getElementById("user-input");\
  const chatOutput = document.getElementById("chat-output");\
\
  const API_KEY = "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"; \
\
  // Agrega el mensaje al historial del chat\
  const addMessage = (sender, message) => \{\
    const messageElement = document.createElement("div");\
    messageElement.textContent = `$\{sender\}: $\{message\}`;\
    chatOutput.appendChild(messageElement);\
    chatOutput.scrollTop = chatOutput.scrollHeight;\
  \};\
\
  // Llamada a la API de OpenAI\
  const getGPTResponse = async (userMessage) => \{\
    const response = await fetch("https://api.openai.com/v1/chat/completions", \{\
      method: "POST",\
      headers: \{\
        "Content-Type": "application/json",\
        Authorization: `Bearer $\{API_KEY\}`,\
      \},\
      body: JSON.stringify(\{\
        model: "gpt-4",\
        messages: [\{ role: "user", content: userMessage \}],\
      \}),\
    \});\
\
    const data = await response.json();\
    return data.choices[0].message.content.trim();\
  \};\
\
  // Manejador de eventos para el bot\'f3n de enviar\
  sendButton.addEventListener("click", async () => \{\
    const userMessage = userInput.value.trim();\
    if (userMessage) \{\
      addMessage("T\'fa", userMessage);\
      userInput.value = "";\
\
      try \{\
        const botResponse = await getGPTResponse(userMessage);\
        addMessage("Chatbot", botResponse);\
      \} catch (error) \{\
        addMessage("Chatbot", "Hubo un problema al procesar tu consulta. Por favor, int\'e9ntalo de nuevo.");\
        console.error("Error al conectar con la API:", error);\
      \}\
    \}\
  \});\
\});\
}