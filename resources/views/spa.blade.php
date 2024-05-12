<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    @vite(['resources/css/app.css'])
    <title>My SPA</title>
</head>
<body>
    <div class="container mt-5">
        <div class="row">
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                Login
              </div>
              <div class="card-body">
                <form id="loginForm">
                  <div class="mb-3">
                    <label for="loginEmail" class="form-label">Email address</label>
                    <input type="email" name="email" class="form-control" id="loginEmail" aria-describedby="emailHelp" placeholder="Enter email">
                  </div>
                  <div class="mb-3">
                    <label for="loginPassword" class="form-label">Password</label>
                    <input type="password" name="password" class="form-control" id="loginPassword" placeholder="Password">
                  </div>
                  <button type="submit" class="btn btn-primary">Login</button>
                </form>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                Register
              </div>
              <div class="card-body">
                <form id="registerForm">
                  <div class="mb-3">
                    <label for="registerName" class="form-label">Name</label>
                    <input type="text" class="form-control" id="registerName" name="name" aria-describedby="nameHelp" placeholder="Enter your name">
                  </div>
                  <div class="mb-3">
                    <label for="registerEmail" class="form-label">Email address</label>
                    <input type="email" class="form-control" name="email" id="registerEmail" aria-describedby="emailHelp" placeholder="Enter email">
                  </div>
                  <div class="mb-3">
                    <label for="registerPassword" class="form-label">Password</label>
                    <input type="password" class="form-control" id="registerPassword" name="password" placeholder="Password">
                  </div>
                  <button type="submit" class="btn btn-success">Register</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>


    @vite(['resources/js/app.js'])
</body>
</html>