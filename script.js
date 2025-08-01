
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const fullName = document.querySelector('input[placeholder="Full Name"]').value.trim();
    const dob = document.querySelector('input[placeholder="Date of Birth"]').value;
    const phone = document.querySelector('input[placeholder="Phone Number"]').value.trim();
    const age = document.querySelector('input[placeholder="Age"]').value;
    const gender = document.querySelector('select:nth-of-type(1)').value;
    const outstation = document.querySelector('select:nth-of-type(2)').value;
    const username = document.querySelector('input[placeholder="Create Username"]').value.trim();
    const password = document.querySelector('input[placeholder="Create Password"]').value;

    if (!fullName || !dob || !phone || !age || !gender || !outstation || !username || !password) {
      alert("Please fill out all fields.");
      return;
    }

    // Here you can send data to Firebase (when ready)

    // Success feedback
    alert("🎉 Registration successful,,Together we Journey! You can now login.");
    // Optionally redirect to login page
    window.location.href = "login.html";
  });



  document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.querySelector("input[type='text']").value.trim();
    const password = document.querySelector("input[type='password']").value.trim();

    // Dummy login check – replace with Firebase auth later
    const validUsername = "admin";
    const validPassword = "ysc123";  // Change to your secure password

    if (username === validUsername && password === validPassword) {
      // Successful login
      alert("Login successful!");
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid credentials. Please try again.");
    }
  });


