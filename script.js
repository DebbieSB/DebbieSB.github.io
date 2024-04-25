document.addEventListener('DOMContentLoaded', function() {
    // Attach an event listener to the document that captures form submissions
    document.getElementById('social-sidebar').addEventListener('submit', function(event) {
        // Prevent the form from submitting the traditional way
        event.preventDefault();

        // Check if the target of the event is a form
        if (event.target.matches('.comment-form')) {
            // Get the comment input from the form
            var commentInput = event.target.querySelector('.comment-input');
            // Get the value of the input
            var commentText = commentInput.value.trim();

            // Check if the comment is not empty
            if (commentText) {
                // Create a new list item for the comment
                var commentItem = document.createElement('li');
                commentItem.textContent = commentText;

                // Find the comments list in the current section and append the new comment
                var commentsList = event.target.closest('.comment-section').querySelector('.comments-list');
                commentsList.appendChild(commentItem);

                // Clear the input field after posting the comment
                commentInput.value = '';
            }
        }
            
    });
});
 