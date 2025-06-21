const sendBtn = document.getElementById("send-btn");
const input = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

sendBtn.addEventListener("click", () => {
  const userText = input.value.trim();
  if (!userText) return;

  addMessage("You", userText, "user");

  // Simulate AI girlfriend reply
  setTimeout(() => {
    const reply = "Honey, I'm always here for you.";
    addMessage("Alice", reply, "ai");
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
