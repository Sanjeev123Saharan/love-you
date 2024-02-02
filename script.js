document.addEventListener('DOMContentLoaded', function() {
    var addMessageBtn = document.getElementById('addMessageBtn');
    var loveMessagesContainer = document.getElementById('loveMessages');
  
    addMessageBtn.addEventListener('click', function() {
      var loveMessages = [
        "I love you more than words can  express sugli.",
        "You mean everything to me putarr.",
        "You're the sunshine in my life jaan.",
        "I'm grateful for every moment spent with you bandri.",
        "My love for you grows stronger every day bundi sakal ki.",
        "You are my soulmate chipkali.",
        "Love you yarr suglu.",
        "You complete me in every way Miss you putarr."
      ];
  
      var randomIndex = Math.floor(Math.random() * loveMessages.length);
      var message = loveMessages[randomIndex];
  
      var messageElement = document.createElement('div');
      messageElement.classList.add('message');
      messageElement.textContent = message;
  
      loveMessagesContainer.appendChild(messageElement);
    });
  });
  