<html>
  <head>
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <form id="my-form">
      <label for="first-name">First Name: </label>
      <input type="text" id="first-name" name="firstName" class="input" />
      <br />
      <label for="last-name">Last Name: </label>
      <input type="text" id="last-name" name="lastName" class="input" />
      <br />
      <input type="submit" value="Submit" />
    </form>

    <script>
      document
        .getElementById('my-form')
        .addEventListener('submit', function (event) {
          event.preventDefault()
          const formData = new FormData(event.currentTarget)
          const firstName = formData.get('firstName')
          const lastName = formData.get('lastName')
          submitViaAPI({
            firstName,
            lastName,
          })
        })

      function submitViaAPI(data) {
        console.log(data)
        console.log('Submitted!')
      }
    </script>
  </body>
</html>
