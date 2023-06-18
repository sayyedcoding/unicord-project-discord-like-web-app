var messageList = document.getElementById('message-list');
var typingIndicator = document.getElementById('typing-indicator');
var messageInput = document.getElementById('message-input');
var sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    var message = messageInput.value.trim();

    if (message !== '') {
        createMessage('You', message);
        messageInput.value = '';
    }
}

function createMessage(sender, content) {
    var messageElement = document.createElement('div');
    messageElement.classList.add('message');

    var senderElement = document.createElement('div');
    senderElement.classList.add('sender');
    senderElement.textContent = sender;

    var contentElement = document.createElement('div');
    contentElement.classList.add('content');
    contentElement.textContent = content;

    messageElement.appendChild(senderElement);
    messageElement.appendChild(contentElement);
    messageList.appendChild(messageElement);

    // Scroll to the bottom of the chat window
    messageList.scrollTop = messageList.scrollHeight;
}
