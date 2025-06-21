let currentLang = "en";

const sendBtn = document.getElementById("send-btn");
const input = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");
const langEn = document.getElementById("lang-en");
const langZh = document.getElementById("lang-zh");

langEn.addEventListener("click", () => {
  currentLang = "en";
  input.placeholder = "Say something to Alice...";
  sendBtn.textContent = "Send";
});

langZh.addEventListener("click", () => {
  currentLang = "zh";
  input.placeholder = "对柔嘉说点什么...";
  sendBtn.textContent = "发送";
});

sendBtn.addEventListener("click", () => {
  const userText = input.value.trim();
  if (!userText) return;

  addMessage(currentLang === "en" ? "You" : "你", userText, "user");

  setTimeout(() => {
    const reply =
      currentLang === "en"
        ? "Honey, I’m always here for you. 💗"
        : "宝贝，我一直在你身边哦～💗";
    addMessage(currentLang === "en" ? "Alice" : "柔嘉", reply, "ai");
  }, 500);

  input.value = "";
});

function addMessage(sender, text, type) {
  const msg = document.createElement("div");
  msg.className = `message ${type}`;
  msg.innerText = `${sender}: ${text}`;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}
