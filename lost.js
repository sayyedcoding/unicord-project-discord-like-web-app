 // Function to handle the post submission
 function handlePostSubmission(event) {
    event.preventDefault();

    const content = document.getElementById('post-content').value;
    const media = document.getElementById('post-media').files[0];

    const postContainer = document.getElementById('posts-container');
    const postElement = document.createElement('div');
    postElement.classList.add('chat-post');

    const authorElement = document.createElement('div');
    authorElement.classList.add('author');
    authorElement.innerText = 'Anonymous';

    const timestampElement = document.createElement('div');
    timestampElement.classList.add('timestamp');
    const timestamp = new Date().toLocaleString();
    timestampElement.innerText = timestamp;

    const contentElement = document.createElement('div');
    contentElement.classList.add('content');
    contentElement.innerText = content;

    const mediaElement = document.createElement('div');
    mediaElement.classList.add('media');

    if (media) {
      const mediaType = media.type.split('/')[0];

      if (mediaType === 'image') {
        const imageElement = document.createElement('img');
        imageElement.src = URL.createObjectURL(media);
        mediaElement.appendChild(imageElement);
      } else if (mediaType === 'video') {
        const videoElement = document.createElement('video');
        videoElement.src = URL.createObjectURL(media);
        videoElement.controls = true;
        mediaElement.appendChild(videoElement);
      }
    }

    postElement.appendChild(authorElement);
    postElement.appendChild(timestampElement);
    postElement.appendChild(contentElement);
    postElement.appendChild(mediaElement);

    postContainer.appendChild(postElement);

    document.getElementById('post-content').value = '';
    document.getElementById('post-media').value = '';

    // Scroll to the bottom of the chat box
    postContainer.scrollTop = postContainer.scrollHeight;
  }

  // Attach event listener to the form
  document.getElementById('post-form').addEventListener('submit', handlePostSubmission);