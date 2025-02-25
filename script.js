<script>
  $(document).ready(function () {
    console.log("Document is ready!");

    // Handle the blog form submission
    $('#blog-form').submit(function (event) {
      event.preventDefault(); // Prevent default form submission behavior

      // Get values from the input fields
      const blogTitle = $('#blog-title').val();
      const blogLink = $('#blog-link').val();

      // Validate the inputs
      if (blogTitle && blogLink) {
        // Append a new blog entry to the list
        $('#blog-items').append(`<li><a href="${blogLink}" target="_blank">${blogTitle}</a></li>`);

        // Clear the form after submission
        $('#blog-form')[0].reset();
      } else {
        alert('Please fill out both the title and the link.');
      }
    });
  });
</script>