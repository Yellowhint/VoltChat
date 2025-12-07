const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatContainer = document.getElementById('chat-container');
const themeToggle = document.getElementById('theme-toggle');

let darkMode = false;

// Toggle Dark Mode
themeToggle.addEventListener('click', () => {
    darkMode = !darkMode;
    document.body.classList.toggle('dark', darkMode);
    themeToggle.textContent = darkMode ? '☀️' : '🌙';
});

// Append Message
function appendMessage(message, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `chat-message ${sender}`;
    msgDiv.innerText = message;
    chatContainer.appendChild(msgDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Simulate bot response
function botResponse(userMsg) {
    const typing = document.createElement('div');
    typing.className = 'chat-message bot typing';
    typing.innerText = 'Typing...';
    chatContainer.appendChild(typing);
    chatContainer.scrollTop = chatContainer.scrollHeight;

    setTimeout(() => {
        typing.remove();
        const reply = `You said: "${userMsg}"`; // Replace with real bot logic
        appendMessage(reply, 'bot');
    }, 1000 + Math.random() * 1000);
}

// Handle form submission
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = chatInput.value.trim();
    if (!message) return;
    appendMessage(message, 'user');
    chatInput.value = '';
    botResponse(message);
});

// Send message with Enter
chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        chatForm.dispatchEvent(new Event('submit'));
    }
});
