export const serveWidget = (req, res) => {
  const { sdn } = req.query;

  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
    <title>Chatbot Widget</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

    <style>
      body {
        margin: 0;
        font-family: Arial, sans-serif;
        background: transparent;
      }

      /* Floating Chat Button */
      .chat-toggle-btn {
        position: fixed;
        bottom: 16px;
        right: 16px;
        background: #4f46e5;
        color: white;
        width: 58px;
        height: 58px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-size: 26px;
        border: none;
        box-shadow: 0px 4px 12px rgba(0,0,0,0.15);
        transition: all 0.25s ease;
        z-index: 99999;
      }

      .chat-toggle-btn:hover {
        transform: scale(1.07);
      }

      /* Chat Container */
      .chat-container {
        position: fixed;
        bottom: 80px;
        right: 16px;
        width: 92%;
        max-width: 360px;
        height: calc(100vh - 120px);
        max-height: 520px;
        background: #ffffff;
        border-radius: 14px;
        box-shadow: 0px 5px 20px rgba(0,0,0,0.18);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        opacity: 0;
        transform: translateY(20px) scale(0.9);
        pointer-events: none;
        transition: all 0.3s ease;
        z-index: 99998;
      }

      .chat-container.open {
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0) scale(1);
      }

      /* Header */
      .header {
        background: #4f46e5;
        color: white;
        padding: 15px;
        font-weight: bold;
        text-align: center;
        position: relative;
      }

      .close-btn {
        position: absolute;
        right: 12px;
        top: 10px;
        cursor: pointer;
        font-size: 20px;
        user-select: none;
      }

      /* Chat Box */
      .chat-box {
        flex: 1;
        overflow-y: auto;
        padding: 12px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        background: #f5f6fa;
      }

      .msg {
        padding: 10px;
        border-radius: 10px;
        max-width: 75%;
        font-size: 14px;
        line-height: 1.3;
        animation: fadeIn 0.2s ease-in-out;
      }

      .msg.bot {
        background: #e7e9ff;
        align-self: flex-start;
      }

      .msg.user {
        background: #cffce2;
        align-self: flex-end;
      }

      /* Input Area */
      .input-area {
        display: flex;
        padding: 10px;
        gap: 6px;
        background: #fff;
        border-top: 1px solid #ddd;
      }

      .input-area input {
        flex: 1;
        padding: 10px;
        border-radius: 8px;
        border: 1px solid #ccc;
        outline: none;
      }

      .input-area button {
        background: #4f46e5;
        color: white;
        border: none;
        padding: 10px 16px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 14px;
      }

      .input-area button:hover {
        background: #3e3ac7;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(6px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    </style>
  </head>

  <body>

    <!-- Floating Button -->
    <button class="chat-toggle-btn" id="chatToggleBtn">💬</button>

    <!-- Full Chat Window -->
    <div class="chat-container" id="chatContainer">
      <div class="header">
        Chatbot • Token: ${sdn}
        <span class="close-btn" id="closeChat">×</span>
      </div>

      <div class="chat-box" id="chatBox">
        <div class="msg bot">👋 Hey! How can I help?</div>
      </div>

      <div class="input-area">
        <input type="text" id="userInput" placeholder="Type a message..."/>
        <button onclick="sendMsg()">Send</button>
      </div>
    </div>

    <script>
      const chatToggleBtn = document.getElementById("chatToggleBtn");
      const chatContainer = document.getElementById("chatContainer");
      const closeChat = document.getElementById("closeChat");
      const chatBox = document.getElementById("chatBox");

      chatToggleBtn.addEventListener("click", () => {
        chatContainer.classList.toggle("open");
      });

      closeChat.addEventListener("click", () => {
        chatContainer.classList.remove("open");
      });

      function sendMsg() {
        const input = document.getElementById("userInput");
        const text = input.value.trim();
        if (!text) return;

        addMessage(text, "user");
        input.value = "";

        setTimeout(() => {
          addMessage("🤖 You said: " + text, "bot");
        }, 600);
      }

      function addMessage(text, type) {
        const msg = document.createElement("div");
        msg.className = "msg " + type;
        msg.textContent = text;
        chatBox.appendChild(msg);
        chatBox.scrollTop = chatBox.scrollHeight;
      }
    </script>
  </body>
  </html>
  `);
};
