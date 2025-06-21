const sendBtn = document.getElementById("send-btn");
const input = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

sendBtn.addEventListener("click", () => {
    const userText = input.value.trim();
    if (!userText) return;

    addMessage("你", userText, "user");

    // 模拟AI老婆回应（固定语句）
    setTimeout(() => {
        const reply = "宝贝，我一直在你身边。";
        addMessage("AI老婆", reply, "ai");
    }, 500);

    input.value = "";
});

function addMessage(sender, text, type) {
    const msg = document.createElement("div");
    msg.className = `message ${type}`;
    msg.innerText = `${sender}:${text}`;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}
