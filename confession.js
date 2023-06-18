document.getElementById('confession-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get input values
  var name = document.getElementById('name-input').value;
  var confession = document.getElementById('confession-input').value;
  var fileInput = document.getElementById('file-input');
  var file = fileInput.files[0];

  // Create confession element
  var confessionElement = document.createElement('div');
  confessionElement.classList.add('confession');

  // Create info element
  var infoElement = document.createElement('div');
  infoElement.classList.add('info');
  infoElement.textContent = name ? 'Posted by ' + name : 'Anonymous';
  confessionElement.appendChild(infoElement);

  // Create content element
  var contentElement = document.createElement('div');
  contentElement.classList.add('content');
  contentElement.textContent = confession;
  confessionElement.appendChild(contentElement);

  // Check if file is uploaded
  if (file) {
      var mediaElement;

      if (file.type.startsWith('image/')) {
          mediaElement = document.createElement('img');
      } else if (file.type.startsWith('video/')) {
          mediaElement = document.createElement('video');
          mediaElement.controls = true;
      }

      mediaElement.classList.add('media');
      mediaElement.src = URL.createObjectURL(file);
      confessionElement.appendChild(mediaElement);
  }

  
  // Add confession element to the list
  var confessionList = document.getElementById('confession-list');
  confessionList.appendChild(confessionElement);

  // Reset form inputs
  document.getElementById('name-input').value = '';
  document.getElementById('confession-input').value = '';
  document.getElementById('file-input').value = '';
});

