const form = document.getElementById('registration-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent default form submission behavior
  
  const formData = new FormData(form); // extract form data
  
  // send HTTP request to register user
  fetch('/api/register', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // handle response from the server
  })
  .catch(error => {
    console.error(error);
    // handle error
  });
});
